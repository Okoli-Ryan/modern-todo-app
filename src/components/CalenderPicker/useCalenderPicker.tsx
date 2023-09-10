import { useEffect, useState } from 'react';

import { CalendarProps } from './CalenderPicker';
import CalenderButton from './components/CalenderButton';

export default function useCalenderPicker({ onDateSelect, selectedDate }: CalendarProps) {
	const currentDate = new Date();

	const [_selectedDate, _setSelectedDate] = useState<Date>(selectedDate ? selectedDate : currentDate);
	const year = _selectedDate.getFullYear();
	const month = _selectedDate.getMonth();

	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const daysInPrevMonth = new Date(year, month, 0).getDate();

	useEffect(() => {
		if (selectedDate) {
			_setSelectedDate(selectedDate);
		}
	}, [selectedDate]);

	const handlePrevMonth = () => {
		const __selectedDate = new Date(_selectedDate);
		__selectedDate.setMonth(__selectedDate.getMonth() - 1);

		_setSelectedDate(__selectedDate);
	};

	const handleNextMonth = () => {
		const __selectedDate = new Date(_selectedDate);
		__selectedDate.setMonth(__selectedDate.getMonth() + 1);

		_setSelectedDate(__selectedDate);
	};

	const monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const handleDateClick = (date: Date) => {
		_setSelectedDate(date);
		onDateSelect(date);
	};

	const handleTodayClick = () => {
		const today = new Date();
		_setSelectedDate(today);
		onDateSelect(today);
	};

	const generateCalendar = () => {
		const firstDay: number = new Date(year, month, 1).getDay();

		const calendar: JSX.Element[] = [];

		// Fill in the leading empty cells for the previous month
		for (let i = 0; i < firstDay; i++) {
			const _date = new Date(year, month - 1, daysInPrevMonth - firstDay + i + 1);

			calendar.push(<CalenderButton key={_date.toISOString()} date={_date} className={"other-month"} onClick={handleDateClick} />);
		}

		// Fill in the days of the current month
		for (let day = 1; day <= daysInMonth; day++) {
			const _date = new Date(_selectedDate);
			_date.setDate(day);

			const isToday: boolean = areDatesOnSameDay(_date, currentDate);
			const isSelected = areDatesOnSameDay(_date, selectedDate!);

			const cellClass: string = isSelected ? "selected-date" : isToday ? "today" : "";

			calendar.push(<CalenderButton key={_date.toISOString()} date={_date} className={cellClass} onClick={handleDateClick} />);
		}

		// Fill in the trailing empty cells for the next month
		const daysInNextMonth = 7 - (calendar.length % 7); // Calculate the number of empty cells needed

		for (let i = 0; i < daysInNextMonth; i++) {
			const _date = new Date(year, month + 1, i + 1);

			calendar.push(<CalenderButton key={_date.toISOString()} date={_date} className={"other-month"} onClick={handleDateClick} />);
		}

		return calendar;
	};

	return {
		currentDate,
		selectedDate: _selectedDate,
		handleDateClick,
		generateCalendar,
		handleTodayClick,
		monthNames,
		handleNextMonth,
		handlePrevMonth,
		month,
		year,
	};
}

function areDatesOnSameDay(date1: Date, date2: Date) {
	return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}
