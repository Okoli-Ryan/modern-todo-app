import { addDays, getDaysInMonth, startOfMonth } from "date-fns";
import { useMemo } from "react";

import { useTaskContext } from "../../context/TaskContext";

export default function useDateList() {
	const { selectedDate: currentDate } = useTaskContext();

	const selectedDate = currentDate ?? new Date();

	const selectedMonth = selectedDate.getMonth();
	const selectedYear = selectedDate.getFullYear();

	const daysArray = useMemo(() => generateDatesInMonth(selectedDate), [selectedMonth, selectedYear]);

	return { daysArray, selectedDate };
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
