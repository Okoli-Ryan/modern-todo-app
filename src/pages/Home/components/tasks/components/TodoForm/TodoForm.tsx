import { Input } from 'antd';
import { IoClose, IoNotificationsSharp } from 'react-icons/io5';

import { Button } from '@components/FormComponents';

const { TextArea } = Input;

export default function TodoForm() {
	return (
		<div className="flex flex-col gap-4 p-6">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-semibold text-textColor">Add Task</h3>
				<button>
					<IoClose className="text-lg text-textColor" />
				</button>
			</div>
			<TextArea rows={4} />
			<div className="grid grid-cols-3 gap-4">
				<Input />
				<Input />
				<Input />
			</div>
			<div className="flex items-center gap-2">
				<span>
					<IoNotificationsSharp className="w-4 h-4 text-[#667085]" />
				</span>
				<p className="text-base text-[#667085]">10 minutes before</p>
				<span className="ml-auto">
					<IoClose className="w-4 h-4 text-lg text-[#667085]" />
				</span>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Button>Cancel</Button>
				<Button type="primary">Add</Button>
			</div>
		</div>
	);
}
