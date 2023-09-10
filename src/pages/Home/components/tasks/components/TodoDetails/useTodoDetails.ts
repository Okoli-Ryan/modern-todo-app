import { format } from 'date-fns';

import { deleteTodo } from '@/lib/todoLib';

import { ITodoDetails } from './TodoDetails';

export default function useTodoDetails({ data, onDeleteTodo, onClose }: Pick<ITodoDetails, "data" | "onDeleteTodo" | "onClose">) {
	const { title, startTime: _startTime, endTime: _endTime } = data!;

	const startDate = format(_startTime, "do LLLL, yyyy");

	const startTime = format(_startTime, "p");

	const endTime = format(_endTime, "p");

	async function onDelete() {
		onDeleteTodo(data);
		deleteTodo(data);
		onClose();
	}

	return { title, startDate, startTime, endTime, onDelete };
}
