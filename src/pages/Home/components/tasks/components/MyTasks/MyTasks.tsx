import './MyTasks.scss';

import { List } from 'antd';

import { Todo } from '@/models/Todo';

import MyTask from './components/MyTask';

interface IMyTasks {
	todoList: Todo[];
}

export default function MyTasks({ todoList }: IMyTasks) {
	return (
		<div className="my-tasks-container">
			<h3 className="text-base font-bold text-darkGray">My Tasks</h3>
			<div className="flex flex-col gap-4 mt-4 mb-24 lg:mb-0">
				<List
					className="my-todos"
					rowKey={(item) => item.id}
					dataSource={todoList}
					renderItem={(props) => <MyTask {...props} />}
					pagination={{ total: todoList.length }}
				/>
			</div>
		</div>
	);
}
