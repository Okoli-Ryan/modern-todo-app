import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const TaskContext = createContext({} as ITaskContext);

interface ITaskContext {
	selectedDate: Date | null;
	setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

export const useTaskContext = () => useContext(TaskContext);
