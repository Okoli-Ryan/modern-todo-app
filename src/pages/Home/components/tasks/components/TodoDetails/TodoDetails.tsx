import { FaRegClock } from 'react-icons/fa';
import { IoCalendarClearOutline, IoClose } from 'react-icons/io5';

import { Button } from '@components/FormComponents';

export default function TodoDetails() {
	return (
		<div className="flex flex-col gap-4 p-6">
			<div className="flex items-center justify-end">
				<button>
					<IoClose className="text-2xl text-textColor" />
				</button>
			</div>
			<h3 className="text-lg font-semibold text-textColor">Create Wireframe</h3>
			<div className="flex flex-col gap-2">
				<span className='flex gap-2 items-center'>
					<IoCalendarClearOutline className="text-primary"/>
					20th January, 2023
				</span>
				<span className='flex gap-2 items-center'>
					<FaRegClock className="text-primary"/>
					8:00 - 10:00 AM
				</span>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Button>Cancel</Button>
				<Button type="primary">Edit</Button>
			</div>
		</div>
	);
}
