import { Input, Popover } from "antd";
import { IoClose, IoNotificationsSharp } from "react-icons/io5";

import { Todo } from "@/models/Todo";
import CalendarPicker from "@components/CalenderPicker";
import { Button } from "@components/FormComponents";

import useTodoForm from "./useTodoForm";

const { TextArea } = Input;

interface ITodoForm {
	data: Todo | null;
	onClose: () => void;
}

export default function TodoForm({ onClose, data }: ITodoForm) {
	const inEditMode = !!data;

	const { onSelectDate, currentDate, dateButtonLabel } = useTodoForm();

	return (
		<div className="flex flex-col gap-4 p-6">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-semibold text-textColor">{inEditMode ? "Edit" : "Add"} Task</h3>
				<button onClick={onClose}>
					<IoClose className="text-lg text-textColor" />
				</button>
			</div>
			<TextArea rows={4} />
			<div className="grid grid-cols-3 gap-4">
				<Popover trigger="click" destroyTooltipOnHide content={<CalendarPicker onDateSelect={onSelectDate} selectedDate={currentDate} />}>
					<Button className="p-0 text-sm small-btn">{dateButtonLabel}</Button>
				</Popover>
				<Input />
				<Input />
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
				<Button>Cancel</Button>
				<Button type="primary">{inEditMode ? "Edit" : "Add"}</Button>
			</div>
		</div>
	);
}
