import { format, isSameDay } from "date-fns";
import { useState } from "react";

import { useTaskContext } from "../../context/TaskContext";

export default function useTodoForm() {
	const { selectedDate } = useTaskContext();
	const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

	function onSelectDate(date: Date) {
		setCurrentDate(date);
	}

	const dateButtonLabel = isSameDay(currentDate, new Date()) ? "Today" : format(currentDate, "P");

	return { currentDate, onSelectDate, dateButtonLabel };
}
