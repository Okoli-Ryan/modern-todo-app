export function getDaysInMonth(date: Date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1; // Months are zero-indexed, so add 1 to get the actual month number
	return new Date(year, month, 0).getDate();
}
