import BottomSheet from '@components/BottomSheet';
import CalendarPicker from '@components/CalenderPicker';

import Greeting from '../Greeting';
import DateList from './components/DateList';
import InputTask from './components/InputTask';
import MyTasks from './components/MyTasks';
import TodoDetails from './components/TodoDetails';
import TodoForm from './components/TodoForm';
import TaskProvider from './context/TaskProvider';
import useTaskContainer from './useTaskContainer';

function Tasks() {
	const {
		showTaskModal,
		closeModalForm,
		openAddTaskModal,
		todoList,
		selectedTodo,
		inEditMode,
		setOnEditMode,
		onEditTodo,
		onAddTodo,
		onDeleteTodo,
		selectedDate,
		setSelectedDate,
	} = useTaskContainer();

	//Show the TodoDetails modal if inEditMode is false and selectedTodo has value
	const showTodoDetails = !inEditMode && !!selectedTodo;

	return (
		<>
			<Greeting />
			<div className="flex flex-col gap-4">
				<div className="grid grid-cols-3 gap-4">
					<div className="flex flex-col gap-4 col-span-3 lg:col-span-2">
						<DateList />
						<MyTasks todoList={todoList} />
					</div>
					<div className="hidden lg:flex">
						<CalendarPicker
							onDateSelect={(e) => {
								setSelectedDate(e);
							}}
							selectedDate={selectedDate}
						/>
					</div>
				</div>
				<InputTask openAddTaskModal={openAddTaskModal} />
				<BottomSheet show={showTaskModal || inEditMode} onClose={closeModalForm} minHeight={inEditMode ? 75 : 0}>
					<TodoForm data={selectedTodo} onClose={closeModalForm} onAddTodo={onAddTodo} onEditTodo={onEditTodo} />
				</BottomSheet>
				<BottomSheet show={showTodoDetails} onClose={closeModalForm}>
					<TodoDetails data={selectedTodo!} onClose={closeModalForm} setOnEditMode={setOnEditMode} onDeleteTodo={onDeleteTodo} />
				</BottomSheet>
			</div>
		</>
	);
}

export default function TaskContainer() {
	return (
		<TaskProvider>
			<Tasks />
		</TaskProvider>
	);
}
