import { Input, Popover } from 'antd';
import { IoClose, IoNotificationsSharp } from 'react-icons/io5';

import { Todo } from '@/models/Todo';
import CalendarPicker from '@components/CalenderPicker';
import { Button } from '@components/FormComponents';
import TimePicker from '@components/TimePicker';

import useTodoForm from './useTodoForm';

const { TextArea } = Input;

export interface ITodoForm {
	data: Todo | null;
	onClose: () => void;
	onAddTodo: (e: Todo) => void;
	onEditTodo: (e: Todo) => void;
}

export default function TodoForm({ onClose, data, onAddTodo, onEditTodo }: ITodoForm) {
	const inEditMode = !!data;

	const {
		onSelectDate,
		currentDate,
		dateButtonLabel,
		setEndTime,
		setStartTime,
		onChangeTitle,
		handleSubmit,
		isLoading,
		isCalenderOpen,
		onChangeCalenderOpen,
	} = useTodoForm({
		onClose,
		onAddTodo,
		onEditTodo,
		data,
	});

	return (
		<div className="flex flex-col gap-4 p-6">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-semibold text-textColor">{inEditMode ? "Edit" : "Add"} Task</h3>
				<button onClick={onClose}>
					<IoClose className="text-lg text-textColor" />
				</button>
			</div>
			<TextArea rows={4} onChange={onChangeTitle} defaultValue={data?.title} autoFocus />
			<div className="grid grid-cols-3 gap-2">
				<Popover
					placement="topRight"
					trigger="click"
					destroyTooltipOnHide
					open={isCalenderOpen}
					onOpenChange={onChangeCalenderOpen}
					content={<CalendarPicker onDateSelect={onSelectDate} selectedDate={currentDate} />}>
					<Button className="p-0 text-sm small-btn">{dateButtonLabel}</Button>
				</Popover>
				<TimePicker onChangeDate={setStartTime} defaultTime={data?.startTime} />
				<TimePicker onChangeDate={setEndTime} defaultTime={data?.endTime} />
			</div>
			<div className="flex items-center gap-2">
				<span>
					<IoNotificationsSharp className="w-4 h-4 text-[#667085]" />
				</span>
				<p className="text-base text-[#667085]">10 minutes before</p>
				<span className="ml-auto">
					<IoClose className="w-4 h-4 text-lg text-[#667085]" />
				</span>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Button onClick={onClose}>Cancel</Button>
				<Button loading={isLoading} onClick={handleSubmit} type="primary">
					{inEditMode ? "Edit" : "Add"}
				</Button>
			</div>
		</div>
	);
}
