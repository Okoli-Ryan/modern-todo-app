import './Calender.scss'; // Import your CSS file

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import useCalenderPicker from './useCalenderPicker';

export interface CalendarProps {
	selectedDate: Date | null;
	onDateSelect: (date: Date) => void;
}

function CalendarPicker(props: CalendarProps) {
	const { generateCalendar, month, year, handleNextMonth, handlePrevMonth, handleTodayClick, monthNames, selectedDate } = useCalenderPicker(props);

	return (
		<div id="calendar">
			<div className="calendar-header">
				<button className="prev-button" onClick={handlePrevMonth}>
					<BsChevronLeft />
				</button>
				<h2>
					{monthNames[month]} {year}
				</h2>
				<button className="next-button" onClick={handleNextMonth}>
					<BsChevronRight />
				</button>
			</div>
			<div className="date-display">
				<div className="current-date">{selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
				<button className="today-button" onClick={handleTodayClick}>
					Today
				</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Sun</th>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
					</tr>
				</thead>
				<tbody>{generateCalendar()}</tbody>
			</table>
		</div>
	);
}

export default CalendarPicker;
