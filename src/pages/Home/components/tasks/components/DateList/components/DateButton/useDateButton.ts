import { format, getDate, isSameDay } from "date-fns";

import { useTaskContext } from "../../../../context/TaskContext";

export default function useDateButton(date: Date) {
	const { setSelectedDate, selectedDate } = useTaskContext();

	const isCurrentDay = isSameDay(date, selectedDate!);
	const dayOfWeek = format(date, "E");
	const day = getDate(date);

	function onSelectDate() {
		setSelectedDate(date);
	}

	return { isCurrentDay, dayOfWeek, day, onSelectDate };
}
