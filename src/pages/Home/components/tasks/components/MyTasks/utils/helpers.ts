import { Todo } from "@/models/Todo";

export function getRandomDateInRange() {
	const now = new Date();
	const sixMonthsInMilliseconds = 6 * 30 * 24 * 60 * 60 * 1000; // 6 months in milliseconds

	// Calculate the range start and end dates
	const rangeStartDate = new Date(now.getTime() - sixMonthsInMilliseconds);
	const rangeEndDate = new Date(now.getTime() + sixMonthsInMilliseconds);

	// Generate a random timestamp within the range
	const randomTimestamp = rangeStartDate.getTime() + Math.random() * (rangeEndDate.getTime() - rangeStartDate.getTime());

	// Create a new Date object from the random timestamp
	const randomDate = new Date(randomTimestamp);

	// Generate random hours, minutes, and seconds
	const hours = Math.floor(Math.random() * 24);
	const minutes = Math.floor(Math.random() * 60);
	const seconds = Math.floor(Math.random() * 60);

	randomDate.setHours(hours, minutes, seconds);

	return randomDate;
}

// Function to generate a random number within a range
export function getRandom(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

export function addTimeStampToTodoList(todos: Todo[]) {
	return todos.map((todo) => {
		const startTime = getRandomDateInRange();
		const endTime = new Date(startTime); // Clone the startTime
		endTime.setHours(startTime.getHours() + getRandom(1, 3)); // Set endTime 1-3 hours after startTime
		endTime.setMinutes(getRandom(0, 59)); // Set minutes between 0 and 59

		// Update the todo object with startTime and endTime
		return {
			...todo,
			startTime,
			endTime,
		};
	});
}
