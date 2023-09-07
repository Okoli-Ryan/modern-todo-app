import { TODOS_STORAGE_KEY } from '@/core/Constants';
import { Todo } from '@/models/Todo';

export function saveTodo(todo: Todo) {
	const allTodos = getAllTodos();

	let todosForTheDay = allTodos[todo.startTime.toString()];

	if (!todosForTheDay) {
		todosForTheDay = [];
	}

	todosForTheDay.unshift(todo);
	allTodos[todo.startTime.toString()] = todosForTheDay;
	localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(allTodos));

	return todo;
}

export function editTodo(updatedTodo: Todo) {
	const allTodos = getAllTodos();
	const todosForTheDay = allTodos[updatedTodo.startTime.toString()] || [];

	const updatedTodos = todosForTheDay.map((todo) => {
		if (todo.id === updatedTodo.id) {
			// Replace the existing todo with the updated one
			return updatedTodo;
		} else {
			return todo;
		}
	});

	allTodos[updatedTodo.startTime.toString()] = updatedTodos;
	localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(allTodos));

	return updatedTodo;
}

export function deleteTodo(todoId: number, date: Date) {
	const allTodos = getAllTodos();
	const todosForTheDay = allTodos[date.toString()] || [];

	const updatedTodos = todosForTheDay.filter((todo) => todo.id !== todoId);

	allTodos[date.toString()] = updatedTodos;
	localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(allTodos));
}

export function getAllTodos(): Record<string, Todo[]> {
	const response = localStorage.getItem(TODOS_STORAGE_KEY);

	if (!response) {
		localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify({}));
		return {};
	}

	return JSON.parse(response);
}

export function getTodosByDate(date: Date) {
	const allTodos = getAllTodos();
	const todos = allTodos[date.toString()] || [];
	return todos;
}
