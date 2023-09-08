import { FaMicrophone } from 'react-icons/fa';

interface IInputTask {
	openAddTaskModal: () => void;
}

export default function InputTask({ openAddTaskModal }: IInputTask) {
	return (
		<div className="fixed bottom-0 z-10 pb-4 bg-white w-[90vw]" onFocus={openAddTaskModal}>
			<input placeholder="Input task" className="w-full pr-12" />
			<button className="absolute top-[13px] right-4 z-20">
				<FaMicrophone className="w-6 h-6 text-primary" />
			</button>
		</div>
	);
}
