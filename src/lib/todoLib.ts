import { TODOS_STORAGE_KEY } from "@/constants/Keys";
import { Todo } from "@/models/Todo";

export function saveTodo(todo: Todo) {
	const allTodos = getAllTodos();

	let todosForTheDay = allTodos[todo.startTime.toISOString()];

	if (!todosForTheDay) {
		todosForTheDay = [];
	}

	todosForTheDay.push(todo);
	allTodos[todo.startTime.toISOString()] = todosForTheDay;
	localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(allTodos));

	return todo;
}

export function getAllTodos() {
	const response = localStorage.getItem(TODOS_STORAGE_KEY);

	if (!response) {
		localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify({}));
		return {};
	}

	return JSON.parse(response);
}

export function getTodosByDate(date: Date) {
	const allTodos = getAllTodos();
	const todos = allTodos[date.toISOString()] || [];
	return todos;
}
