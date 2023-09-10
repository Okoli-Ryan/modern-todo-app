import { BsPlusLg } from 'react-icons/bs';

import { Button } from '@components/FormComponents';

interface IGreeting {
	openAddTaskModal: () => void;
}

export default function Greeting({ openAddTaskModal }: IGreeting) {
	return (
		<div className="mt-4 flex justify-between items-center">
			<div className="">
				<h1 className="text-2xl font-semibold text-DarkGray">Good {getGreeting()}</h1>
				<h3 className="text-gray">You got some task to do.</h3>
			</div>
			<div className="hidden lg:flex">
				<Button type="primary" onClick={openAddTaskModal} className="flex gap-2 items-center bg-primary">
					<span>
						<BsPlusLg className="text-white text-lg" />
					</span>
					<span>Create New Task</span>
				</Button>
			</div>
		</div>
	);
}

function getGreeting() {
	const date = new Date();

	const hourOfDay = date.getHours();

	if (hourOfDay > 6 && hourOfDay < 12) {
		return "morning!";
	}

	if (hourOfDay >= 12 && hourOfDay < 18) {
		return "afternoon!";
	}

	return "evening!";
}
