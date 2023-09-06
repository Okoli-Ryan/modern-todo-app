import { Button } from "antd";

import useDateButton from "./useDateButton";

export interface IDateButton {
	dateIndex: number;
	selectedDate: Date;
}

export function DateButton({ date }: { date: Date }) {
	const { day, dayOfWeek, isCurrentDay, onSelectDate } = useDateButton(date);

	return (
		<Button
			type={isCurrentDay ? "primary" : "default"}
			onClick={onSelectDate}
			className="flex items-center justify-center flex-col gap-2 border-[1px] border-[#D0D5DD] px-4 py-2.5 min-w-[62px] min-h-[68px] rounded-md">
			<p className="font-semibold text-xs text-[#344054]">{dayOfWeek}</p>
			<p className="font-semibold text-xs text-[#344054]">{day}</p>
		</Button>
	);
}
