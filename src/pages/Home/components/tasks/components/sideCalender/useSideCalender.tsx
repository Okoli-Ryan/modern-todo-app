import { useTaskContext } from '../../context/TaskContext';

export default function useSideCalender() {
	const { selectedTodo, selectedDate, setSelectedDate } = useTaskContext();

	return { selectedTodo, selectedDate, setSelectedDate };
}
