import { format } from "date-fns";

import { ITodoDetails } from "./TodoDetails";

export default function useTodoDetails({ data }: Partial<ITodoDetails>) {
	const { title, startTime: _startTime, endTime: _endTime } = data!;

	const startDate = format(_startTime, "do LLLL, yyyy");

	const startTime = format(_startTime, "p");

	const endTime = format(_endTime, "p");

	return { title, startDate, startTime, endTime };
}
