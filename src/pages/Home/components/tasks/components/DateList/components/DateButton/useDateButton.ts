import { format, getDate, isSameDay, set } from 'date-fns';
import { useLayoutEffect, useRef } from "react";

import { useTaskContext } from '../../../../context/TaskContext';

export default function useDateButton(date: Date) {
	const { setSelectedDate, selectedDate } = useTaskContext();
    const buttonRef = useRef<HTMLButtonElement>(null);

	const isCurrentDay = isSameDay(date, selectedDate!);
	const dayOfWeek = format(date, "E");
	const day = getDate(date);

	function onSelectDate() {
		const currentDate = new Date();
		const newDate = set(date, { hours: currentDate.getHours(), minutes: currentDate.getMinutes() });
		setSelectedDate(newDate);
	}

	useLayoutEffect(() => {
		if (isCurrentDay) {
			buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		}
	}),
		[isCurrentDay];

	return { isCurrentDay, dayOfWeek, day, buttonRef, onSelectDate };
}
