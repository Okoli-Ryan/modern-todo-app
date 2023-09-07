import './MyTasks.scss';

import { List } from 'antd';

import { Todo } from '@/models/Todo';

import MyTask from './components/MyTask';

interface IMyTasks {
	todoList: Todo[];
}

export default function MyTasks({ todoList }: IMyTasks) {
	return (
		<div>
			<h3 className="text-base font-bold text-darkGray">My Tasks</h3>
			<div className="flex flex-col gap-4 mt-4">
				<List className="my-todos" dataSource={todoList} renderItem={(props) => <MyTask {...props} />} pagination={{ total: todoList.length }} />
			</div>
		</div>
	);
}
