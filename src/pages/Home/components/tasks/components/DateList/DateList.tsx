import { format } from "date-fns";

import DateButton from "./components/DateButton";
import useDateList from "./useDateList";

export default function DateList() {
	const { daysArray, selectedDate } = useDateList();

	return (
		<div className="sticky z-20 py-4 bg-white top-16">
			<h4 className="text-sm font-medium text-DarkGray">{`${format(selectedDate, "MMMM")} ${selectedDate.getFullYear()}`}</h4>
			<div className="flex w-full gap-4 mt-3 overflow-auto">
				{daysArray.map((date) => (
					<DateButton key={`${date.toString()}`} date={date} />
				))}
			</div>
		</div>
	);
}
