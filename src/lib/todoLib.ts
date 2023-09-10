import { isSameDay } from 'date-fns';

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

export function updateTodo(updatedTodo: Todo, previousTodoStartTime: Date) {
	const previousTodoDateKey = todoKeyFromDate(previousTodoStartTime);
	const newTodoDateKey = todoKeyFromDate(updatedTodo.startTime);
	const allTodos = getAllTodos();
	const todosForTheDay = allTodos[previousTodoDateKey] || [];

	let updatedTodos = todosForTheDay.map((todo) => {
		if (todo.id === updatedTodo.id) {
			// Replace the existing todo with the updated one

			if (!isSameDay(updatedTodo.startTime, todo.startTime)) {
				return undefined;
			}

			return updatedTodo;
		} else {
			return todo;
		}
	});

	updatedTodos = updatedTodos.filter(Boolean);

	allTodos[previousTodoDateKey] = updatedTodos as Todo[];

	// The todo was updated to a different date
	if (previousTodoDateKey !== newTodoDateKey) {
		let newTodos = allTodos[newTodoDateKey] ?? [];
		newTodos = [updatedTodo, ...newTodos];
		allTodos[newTodoDateKey] = newTodos;
	}

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

	const parsedResponse = JSON.parse(response);
	return NormalizeTodoObject(parsedResponse);
}

export function getTodosByDate(date: Date) {
	const allTodos = getAllTodos();
	const todos = allTodos[todoKeyFromDate(date)] || [];
	return NormalizeTodos(todos);
}

export function todoKeyFromDate(date: Date) {
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

function NormalizeTodoObject(payload: Record<string, Todo[]>): Record<string, Todo[]> {
	const normalizedPayload: Record<string, Todo[]> = {};

	for (const key in payload) {
		if (Object.prototype.hasOwnProperty.call(payload, key)) {
			normalizedPayload[key] = NormalizeTodos(payload[key]);
		}
	}

	return normalizedPayload;
}
