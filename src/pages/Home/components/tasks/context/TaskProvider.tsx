import React, { useState } from 'react';

import { Todo } from "@/models/Todo";

import { TaskContext } from './TaskContext';

export default function TaskProvider({ children }: { children: React.ReactNode }) {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

	return <TaskContext.Provider value={{ selectedDate, setSelectedDate, selectedTodo, setSelectedTodo }}>{children}</TaskContext.Provider>;
}
