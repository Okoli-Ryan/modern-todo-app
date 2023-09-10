import React from "react";

import { Todo } from "@/models/Todo";
import CalendarPicker from "@components/CalenderPicker";

import TodoDetails from "../TodoDetails";
import TodoForm from "../TodoForm";
import useSideCalender from "./useSideCalender";

interface ISideCalender {
	showTaskForm: boolean;
	showTodoDetails: boolean;
	onClose: () => void;
	onDeleteTodo: (e: Todo) => void;
	setOnEditMode: () => void;
	onAddTodo: (e: Todo) => void;
	onEditTodo: (e: Todo) => void;
}

export default function SideCalender({ showTaskForm, showTodoDetails, onClose, onAddTodo, onEditTodo, setOnEditMode, onDeleteTodo }: ISideCalender) {
	const { selectedTodo, selectedDate, setSelectedDate } = useSideCalender();

	if (showTodoDetails)
		return <TodoDetails key={selectedTodo?.id} data={selectedTodo!} onClose={onClose} setOnEditMode={setOnEditMode} onDeleteTodo={onDeleteTodo} />;
	if (showTaskForm) return <TodoForm key={selectedTodo?.id} data={selectedTodo} onClose={onClose} onAddTodo={onAddTodo} onEditTodo={onEditTodo} />;

	return (
		<CalendarPicker
			onDateSelect={(e) => {
				setSelectedDate(e);
			}}
			selectedDate={selectedDate}
		/>
	);
}
