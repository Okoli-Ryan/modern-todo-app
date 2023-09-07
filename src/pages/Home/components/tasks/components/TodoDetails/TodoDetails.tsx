import { FaRegClock } from 'react-icons/fa';
import { IoCalendarClearOutline, IoClose } from 'react-icons/io5';

import { Todo } from '@/models/Todo';
import { Button } from '@components/FormComponents';

import useTodoDetails from './useTodoDetails';

export interface ITodoDetails {
	data: Todo;
	setOnEditMode: () => void;
	onClose: () => void;
}

export default function TodoDetails({ data, setOnEditMode, onClose }: ITodoDetails) {

    const {  endTime, startDate, startTime, title } = useTodoDetails({ data })

	return (
		<div className="flex flex-col gap-4 p-6">
			<div className="flex items-center justify-end">
				<button onClick={onClose}>
					<IoClose className="text-2xl text-textColor" />
				</button>
			</div>
			<h3 className="text-lg font-semibold text-textColor">{title}</h3>
			<div className="flex flex-col gap-2">
				<span className="flex items-center gap-2">
					<IoCalendarClearOutline className="text-primary" />
					{startDate}
				</span>
				<span className="flex items-center gap-2">
					<FaRegClock className="text-primary" />
					{startTime} - {endTime}
				</span>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Button>Cancel</Button>
				<Button type="primary" onClick={setOnEditMode}>
					Edit
				</Button>
			</div>
		</div>
	);
}
