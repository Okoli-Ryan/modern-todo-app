import { isSameDay } from 'date-fns';
import { useEffect, useState } from 'react';

import { getTodosByDate } from '@/lib/todoLib';
import { fetchTodosAsync } from '@/lib/todoLibAsync';
import { Todo } from '@/models/Todo';

import { addTimeStampToTodoList } from './components/MyTasks/utils/helpers';
import { useTaskContext } from './context/TaskContext';

export default function useTaskContainer() {
	const [showTaskModal, setShowTaskModal] = useState(false);
	const [inEditMode, setInEditMode] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const { selectedTodo, setSelectedTodo, selectedDate } = useTaskContext();

	useEffect(() => {
		async function getTodos() {
			try {
				setIsLoading(true);
				const todos = getTodosByDate(selectedDate!);

				//Fetch Todos from JsonPlaceholder only for current day
				//! Add this back later
				// if (isSameDay(selectedDate!, new Date())) {
				// 	const asyncTodos = await fetchTodosAsync();
				// 	const asyncTodosWithTimeStamp = addTimeStampToTodoList(asyncTodos);

				// 	todos.push(...asyncTodosWithTimeStamp);
				// }

				setTodoList(todos);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		}

		getTodos();
	}, [selectedDate]);

	function onAddTodo(payload: Todo) {
		setTodoList([payload, ...todoList]);
	}

	function onEditTodo(payload: Todo) {
		setTodoList((prev) => prev.map((todo) => (todo.id === payload.id ? payload : todo)));
	}

	function onDeleteTodo(payload: Todo) {
		setTodoList((prev) => prev.filter((todo) => todo.id !== payload.id));
	}

	function closeModalForm() {
		setInEditMode(false);
		setShowTaskModal(false);
		setSelectedTodo(null);
	}

	function openAddTaskModal() {
		setShowTaskModal(true);
	}

	function setOnEditMode() {
		setInEditMode(true);
	}

	return {
		showTaskModal,
		openAddTaskModal,
		closeModalForm,
		selectedTodo,
		setSelectedTodo,
		setOnEditMode,
		inEditMode,
		todoList,
		onAddTodo,
		onEditTodo,
		onDeleteTodo,
	};
}
