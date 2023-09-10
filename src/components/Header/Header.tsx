import { RiMenu2Line } from 'react-icons/ri';

export default function Header() {
	return (
		<div className="container sticky top-0 flex items-center justify-between w-full h-16 bg-white">
			<h1 className="text-2xl font-bold">ToDo</h1>
			<span>
				<RiMenu2Line className="text-2xl" />
			</span>
		</div>
	);
}
