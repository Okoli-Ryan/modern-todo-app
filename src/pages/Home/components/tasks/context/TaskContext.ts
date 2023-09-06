import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { Todo } from "@/models/Todo";

export const TaskContext = createContext({} as ITaskContext);

interface ITaskContext {
	selectedDate: Date | null;
	setSelectedDate: Dispatch<SetStateAction<Date | null>>;
	selectedTodo: Todo | null;
	setSelectedTodo: Dispatch<SetStateAction<Todo | null>>;
}

export const useTaskContext = () => useContext(TaskContext);
