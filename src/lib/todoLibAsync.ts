import { BASE_URL } from '@/core/Constants';
import { Todo } from '@/models/Todo';

// Function to fetch all Todos
export async function fetchTodosAsync(): Promise<Todo[]> {
	const response = await fetch(BASE_URL);
	if (!response.ok) {
		throw new Error("Failed to fetch Todos");
	}
	return await response.json();
}

// Function to create a new Todo
export async function createTodoAsync(newTodo: Todo): Promise<Todo> {
	const response = await fetch(BASE_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newTodo),
	});
	if (!response.ok) {
		throw new Error("Failed to create Todo");
	}
	return await response.json();
}

// Function to update an existing Todo
export async function updateTodoAsync(updatedTodo: Partial<Todo>): Promise<Todo> {
	const response = await fetch(`${BASE_URL}/${updatedTodo.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedTodo),
	});
	if (!response.ok) {
		throw new Error("Failed to update Todo");
	}
	return await response.json();
}

export async function deleteTodoAsync(id: number): Promise<void> {
	const response = await fetch(`${BASE_URL}/${id}`, {
		method: "DELETE",
	});
	if (!response.ok) {
		throw new Error("Failed to delete Todo");
	}
}
