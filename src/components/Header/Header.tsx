import { RiMenu2Line } from 'react-icons/ri';

export default function Header() {
	return (
			<div className="flex justify-between items-center h-16 w-full container sticky top-0 bg-white">
				<h1 className="font-bold text-2xl">ToDo</h1>
				<span>
					<RiMenu2Line className="text-2xl" />
				</span>
			</div>
	);
}
