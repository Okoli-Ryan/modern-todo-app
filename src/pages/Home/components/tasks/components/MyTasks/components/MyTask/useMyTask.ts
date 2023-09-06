import { format, formatDistance } from "date-fns";
import { useState } from "react";

import { Todo } from "@/models/Todo";

import { useTaskContext } from "../../../../context/TaskContext";

export default function useMyTask(props: Todo) {
	const { startTime, completed } = props;
	const { setSelectedTodo } = useTaskContext();

	const [isChecked, setIsChecked] = useState(completed);

	function selectTodo() {
		setSelectedTodo(props);
	}

	function toggleCompleted() {
		setIsChecked((prev) => !prev);
	}

	const normalizeTime = (date: Date) => format(date, "p");
	const timeRangeCreated = formatDistance(startTime, new Date()).replace("about", "");

	return { selectTodo, normalizeTime, timeRangeCreated, isChecked, toggleCompleted };
}
