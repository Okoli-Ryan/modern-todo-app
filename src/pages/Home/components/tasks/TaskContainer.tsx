import BottomSheet from "@components/BottomSheet";

import Greeting from "../Greeting";
import DateList from "./components/DateList";
import InputTask from "./components/InputTask";
import MyTasks from "./components/MyTasks";
import TodoDetails from "./components/TodoDetails";
import TodoForm from "./components/TodoForm";
import TaskProvider from "./context/TaskProvider";
import useTaskContainer from "./useTaskContainer";

function Tasks() {
	const { showTaskModal, closeModalForm, openAddTaskModal, selectedTodo, inEditMode, setOnEditMode } = useTaskContainer();

	//Show the TodoDetails modal if inEditMode is false and selectedTodo has value
	const showTodoDetails = !inEditMode && !!selectedTodo;

	return (
		<>
			<Greeting />
			<div className="flex flex-col gap-4">
				<DateList />
				<MyTasks />
				<InputTask openAddTaskModal={openAddTaskModal} />
				<BottomSheet show={showTaskModal || inEditMode} onClose={closeModalForm} minHeight={inEditMode ? 75 : 0}>
					<TodoForm data={selectedTodo} onClose={closeModalForm} />
				</BottomSheet>
				<BottomSheet show={showTodoDetails} onClose={closeModalForm}>
					<TodoDetails data={selectedTodo!} onClose={closeModalForm} setOnEditMode={setOnEditMode} />
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
