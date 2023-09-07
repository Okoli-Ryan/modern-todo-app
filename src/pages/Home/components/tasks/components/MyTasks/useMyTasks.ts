import { useEffect, useState } from 'react';

import { fetchTodosAsync } from '@/lib/todoLibAsync';
import { Todo } from '@/models/Todo';

import { addTimeStampToTodoList } from './utils/helpers';

export default function useMyTasks() {
	const [isLoading, setIsLoading] = useState(true);
	const [todoList, setTodoList] = useState<Todo[]>([]);

	useEffect(() => {
		async function getTodos() {
			try {
				setIsLoading(true);
				const todos = await fetchTodosAsync();

				const todosWithTimeStamp = addTimeStampToTodoList(todos);
				setTodoList(todosWithTimeStamp);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}

		getTodos();
	}, []);

	return {
		todoList,
		isLoading,
	};
}
