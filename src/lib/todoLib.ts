import { TODOS_STORAGE_KEY } from '@/core/Constants';
import { Todo } from '@/models/Todo';

export function saveTodo(todo: Todo) {
	const allTodos = getAllTodos();

	let todosForTheDay = allTodos[todoKeyFromDate(todo.startTime)];

	if (!todosForTheDay) {
		todosForTheDay = [];
	}

	todosForTheDay.unshift(todo);
	allTodos[todoKeyFromDate(todo.startTime)] = todosForTheDay;
	localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(allTodos));

	return todo;
}

export function editTodo(updatedTodo: Todo) {
	const allTodos = getAllTodos();
	const todosForTheDay = allTodos[todoKeyFromDate(updatedTodo.startTime)] || [];

	//! Include logic to remove if date was changed
	const updatedTodos = todosForTheDay.map((todo) => {
		if (todo.id === updatedTodo.id) {
			// Replace the existing todo with the updated one
			return updatedTodo;
		} else {
			return todo;
		}
	});

	allTodos[todoKeyFromDate(updatedTodo.startTime)] = updatedTodos;
	localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(allTodos));

	return updatedTodo;
}

export function deleteTodo(deletedTodo: Todo) {
	const allTodos = getAllTodos();
	const todosForTheDay = allTodos[todoKeyFromDate(deletedTodo.startTime)];

	const updatedTodos = todosForTheDay.filter((todo) => todo.id !== deletedTodo.id);

	allTodos[todoKeyFromDate(deletedTodo.startTime)] = updatedTodos;
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
	const todos = allTodos[todoKeyFromDate(date)] || [];
	return NormalizeTodos(todos);
}

function todoKeyFromDate(date: Date) {
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function NormalizeTodos(todos: Todo[]) {
	return todos.map((todo: Todo) => {
		const _todo = { ...todo };

		_todo.startTime = new Date(_todo.startTime);
		_todo.endTime = new Date(_todo.endTime);

		return _todo;
	});
}
