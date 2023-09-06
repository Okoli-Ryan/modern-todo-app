import { useEffect, useState } from "react";

import { API } from "@/constants/API";
import { Todo } from "@/models/Todo";

import { addTimeStampToTodoList } from "./utils/helpers";

export default function useMyTasks() {
	const [isLoading, setIsLoading] = useState(true);
	const [todoList, setTodoList] = useState<Todo[]>([]);

	useEffect(() => {
		async function getTodos() {
			try {
				setIsLoading(true);
				const response = await fetch(API.getTodos);

				if (response.ok) {
					const todos = await response.json();
					const todosWithTimeStamp = addTimeStampToTodoList(todos);
					setTodoList(todosWithTimeStamp);
				}
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
