import React, { useState } from 'react';

import { TaskContext } from './TaskContext';

export default function TaskProvider({ children }: { children: React.ReactNode }) {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	return <TaskContext.Provider value={{ selectedDate, setSelectedDate }}>{children}</TaskContext.Provider>;
}
