export function getDaysInMonthWithDetails(date: Date | null) {
	if (!date) {
		date = new Date(); // Use the current date if date is not provided
	}
	const year = date.getFullYear();
	const month = date.getMonth(); // Months are zero-indexed
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const daysArray = [];

	const options = { weekday: "short", day: "2-digit", month: "short" } as Intl.DateTimeFormatOptions; // Specify the type explicitly
    
	for (let day = 1; day <= daysInMonth; day++) {
        const currentDay = new Date(year, month, day);
		const formattedDate = currentDay.toLocaleDateString("en-US", options);
        console.log({formattedDate})

		daysArray.push({
			day: day,
			dayOfWeek: formattedDate.split(",")[0].trim(), // Extract the day of the week
			year: year,
			month: formattedDate.split(",")[1].trim().split(" ")[0], // Extract the month
		});
	}

	return daysArray;
}
