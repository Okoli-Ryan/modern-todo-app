
import Greeting from '../Greeting';
import DateList from './components/DateList';
import InputTask from './components/InputTask';
import MyTasks from './components/MyTasks';
import TaskProvider from './context/TaskProvider';

export default function TaskContainer() {
	return (
		<TaskProvider>
			<Greeting />
			<div className="flex flex-col gap-4">
				<DateList />
				<MyTasks />
				<InputTask />
				
			</div>
		</TaskProvider>
	);
}
