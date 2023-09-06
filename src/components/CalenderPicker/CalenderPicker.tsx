import "./Calender.scss"; // Import your CSS file

import useCalenderPicker from "./useCalenderPicker";

export interface CalendarProps {
	selectedDate: Date | null;
	onDateSelect: (date: Date) => void;
}

function CalendarPicker(props: CalendarProps) {
	const { generateCalendar, month, year, handleNextMonth, handlePrevMonth, handleTodayClick, monthNames, currentDate } = useCalenderPicker(props);

	return (
		<div id="calendar">
			<div className="calendar-header">
				<button className="prev-button" onClick={handlePrevMonth}>
					&#9665;
				</button>
				<h2>
					{monthNames[month]} {year}
				</h2>
				<button className="next-button" onClick={handleNextMonth}>
					&#9655;
				</button>
			</div>
			<div className="date-display">
				<div className="current-date">{currentDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
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
