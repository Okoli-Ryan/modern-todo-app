import Header from '../../components/Header';
import TaskContainer from './components/tasks/TaskContainer';

export default function Home() {
	return (
		<div className="home">
			<Header />
			<div className="container">
				<div className="flex flex-col gap-4">
					<TaskContainer />
				</div>
			</div>
		</div>
	);
}
