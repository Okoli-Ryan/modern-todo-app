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
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const { selectedTodo, setSelectedTodo, selectedDate, setSelectedDate } = useTaskContext();

	useEffect(() => {
		async function getTodos() {
			try {
				const todos = getTodosByDate(selectedDate!);

				//Fetch Todos from JsonPlaceholder only for current day
				if (isSameDay(selectedDate!, new Date())) {
					const asyncTodos = await fetchTodosAsync();
					const asyncTodosWithTimeStamp = addTimeStampToTodoList(asyncTodos);

					todos.push(...asyncTodosWithTimeStamp);
				}

				setTodoList(todos);
			} catch (error) {
				console.log(error);
			}
		}

		getTodos();
	}, [selectedDate]);

	function onAddTodo(payload: Todo) {
		setTodoList([payload, ...todoList]);
	}

	function onEditTodo(payload: Todo) {
		const currentTodos = [...todoList];
		const newTodos = [] as Todo[];
		let hasNewDate = false;
		for (let i = 0; i < currentTodos.length; i++) {
			if (currentTodos[i].id === payload.id) {
				if (!isSameDay(currentTodos[i].startTime, payload.startTime)) {
					hasNewDate = true;
					continue;
				}
				newTodos.push(payload);
				continue;
			}
			newTodos.push(currentTodos[i]);
		}

		setTodoList(newTodos);
		hasNewDate && setSelectedDate(payload.startTime);
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
        setInEditMode(false);
		setSelectedTodo(null);
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
		selectedDate,
		setSelectedDate,
		onEditTodo,
		onDeleteTodo,
	};
}
