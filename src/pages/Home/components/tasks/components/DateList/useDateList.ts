import { addDays, getDaysInMonth, startOfMonth } from "date-fns";
import { useMemo, useState } from "react";

import { useTaskContext } from "../../context/TaskContext";

export default function useDateList() {
	const { selectedDate: currentDate, setSelectedDate } = useTaskContext();
	const [isCalenderOpen, setIsCalenderOpen] = useState(false);

	const selectedDate = currentDate ?? new Date();

	const selectedMonth = selectedDate.getMonth();
	const selectedYear = selectedDate.getFullYear();

	function onDateSelect(date: Date) {
		setSelectedDate(date);
		setIsCalenderOpen(false);
	}

	function onChangeCalenderOpen(newOpen: boolean) {
		setIsCalenderOpen(newOpen);
	}

	const daysArray = useMemo(() => generateDatesInMonth(selectedDate), [selectedMonth, selectedYear]);

	return { daysArray, selectedDate, onDateSelect, onChangeCalenderOpen, isCalenderOpen };
}

function generateDatesInMonth(date: Date) {
	if (!date) date = new Date();

	const numberOfDaysInMonth = getDaysInMonth(date);
	const startDate = startOfMonth(date);

	// Use a loop to generate the array
	const result = [];
	for (let i = 0; i <= numberOfDaysInMonth - 1; i++) {
		result.push(addDays(startDate, i));
	}

	return result;
}
