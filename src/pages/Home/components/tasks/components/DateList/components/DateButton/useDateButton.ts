import { format, getDate, isSameDay, set } from 'date-fns';

import { useTaskContext } from '../../../../context/TaskContext';

export default function useDateButton(date: Date) {
	const { setSelectedDate, selectedDate } = useTaskContext();

	const isCurrentDay = isSameDay(date, selectedDate!);
	const dayOfWeek = format(date, "E");
	const day = getDate(date);

	function onSelectDate() {
		const currentDate = new Date();
		const newDate = set(date, { hours: currentDate.getHours(), minutes: currentDate.getMinutes() });
		setSelectedDate(newDate);
	}

	return { isCurrentDay, dayOfWeek, day, onSelectDate };
}
