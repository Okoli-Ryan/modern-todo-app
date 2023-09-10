import { Popover } from "antd";
import { format } from "date-fns";
import { IoCalendarSharp } from "react-icons/io5";

import CalendarPicker from "@components/CalenderPicker";

import DateButton from "./components/DateButton";
import useDateList from "./useDateList";

export default function DateList() {
	const { daysArray, selectedDate, onDateSelect, isCalenderOpen, onChangeCalenderOpen } = useDateList();

	return (
		<div className="sticky z-20 py-4 bg-white top-16">
			<div className="flex justify-between items-center">
				<h4 className="text-sm font-medium text-DarkGray">{`${format(selectedDate, "MMMM")} ${selectedDate.getFullYear()}`}</h4>
				<div className="flex lg:hidden">
					<Popover
						placement="bottom"
						trigger="click"
						destroyTooltipOnHide
						open={isCalenderOpen}
						onOpenChange={onChangeCalenderOpen}
						content={<CalendarPicker onDateSelect={onDateSelect} selectedDate={selectedDate} />}>
						<button>
							<IoCalendarSharp className="text-xl text-primary" />
						</button>
					</Popover>
				</div>
			</div>
			<div className="flex w-full gap-4 mt-3 overflow-auto">
				{daysArray.map((date) => (
					<DateButton key={`${date.toString()}`} date={date} />
				))}
			</div>
		</div>
	);
}
