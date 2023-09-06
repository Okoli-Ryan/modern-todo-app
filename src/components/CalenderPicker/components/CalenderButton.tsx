import React from "react";

interface ICalenderButton {
	date: Date;
	className?: React.CSSProperties | string;
	onClick: (e: Date) => void;
}

export default function CalenderButton({ date, className, onClick }: ICalenderButton) {
	return (
		<td className={`${className} day`} onClick={() => onClick(date)}>
			<span>{date.getDate()}</span>
		</td>
	);
}
