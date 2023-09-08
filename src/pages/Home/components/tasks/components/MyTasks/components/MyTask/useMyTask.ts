import { format, formatDistance } from 'date-fns';
import { useState } from 'react';

import { updateTodo } from '@/lib/todoLib';
import { updateTodoAsync } from '@/lib/todoLibAsync';

import { useTaskContext } from '../../../../context/TaskContext';
import { IMyTask } from './MyTask';

export default function useMyTask(props: IMyTask) {
	const { startTime, completed } = props;
	const { setSelectedTodo } = useTaskContext();

	const [isChecked, setIsChecked] = useState(completed);

	function selectTodo() {
		setSelectedTodo(props);
	}

	async function toggleCompleted() {
		const payload = { ...props, completed: !isChecked };

		setIsChecked(payload.completed);
		updateTodo(payload, payload.startTime);
		await updateTodoAsync(payload);
	}

	const normalizeTime = (date: Date) => format(date, "p");
	const timeRangeCreated = formatDistance(startTime, new Date()).replace("about", "");

	return { selectTodo, normalizeTime, timeRangeCreated, isChecked, toggleCompleted };
}
