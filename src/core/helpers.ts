import { todoKeyFromDate } from "@/lib/todoLib";
import { Todo } from "@/models/Todo";

import { TODOS_STORAGE_KEY } from "./Constants";

export function doesDateHaveTask(date: Date): boolean {
	const datesWithTasks: Record<string, Todo[]> = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY) || "{}");

	const dateKey = todoKeyFromDate(date);

	const todosForTheDay = datesWithTasks?.[dateKey];

	return todosForTheDay && todosForTheDay.length > 0;
}
