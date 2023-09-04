import { FaMicrophone } from 'react-icons/fa';

export default function InputTask() {
	return (
		<div className="sticky bottom-0 pb-4 bg-white">
			<input placeholder='Input task' className='w-full pr-12'/>
			<button className="absolute top-[13px] right-4 z-20">
				<FaMicrophone className="w-6 h-6 text-primary"/>
			</button>
		</div>
	);
}
