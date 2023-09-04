export interface IDateObject {
	day: number;
	dayOfWeek: string;
	month: string;
	year: number;
}

export function checkIfCurrentDay(dateObject: IDateObject) {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.toLocaleDateString("en-US", { month: "short" });
	const currentDay = currentDate.getDate();

    console.log(dateObject.month)
	return dateObject.year === currentYear && dateObject.month === currentMonth && dateObject.day === currentDay;
}
