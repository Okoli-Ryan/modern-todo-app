import { Checkbox } from 'antd';

import { Todo } from '@/models/Todo';

import useMyTask from './useMyTask';

export interface IMyTask extends Todo {}

export default function MyTask(props: IMyTask) {
	const { normalizeTime, selectTodo, timeRangeCreated, isChecked, toggleCompleted } = useMyTask(props);
	const { startTime, endTime, title } = props;

	return (
		<div className="flex gap-4 px-6 py-3 items-center bg-[#F9FAFB] z-10">
			<Checkbox checked={isChecked} onChange={toggleCompleted} />
			<div className="flex items-center justify-between w-full cursor-pointer" onClick={selectTodo}>
				<div className="flex flex-col gap-2">
					<h6 className={`text-[#101828] font-medium text-sm ${isChecked ? "line-through" : ""}`}>{title}</h6>
					<p className={`text-[#475467] text-sm ${isChecked ? "line-through" : ""}`}>
						{normalizeTime(startTime)} - {normalizeTime(endTime)}
					</p>
				</div>
				<p className=" text-[#475467] text-sm whitespace-nowrap">{timeRangeCreated}</p>
			</div>
		</div>
	);
}
