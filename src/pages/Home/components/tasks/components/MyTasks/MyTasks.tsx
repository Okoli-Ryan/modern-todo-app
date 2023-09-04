
export default function MyTasks() {
	

	return (
		<div>
			<h3 className="text-darkGray font-bold text-base">My Tasks</h3>
			<div className="flex flex-col gap-4 mt-4">
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		</div>
	);
}

function Task() {
	return (
		<div className="flex gap-4 px-6 py-3 items-center bg-[#F9FAFB]">
			<input type="checkbox" name="isChecked" id="1" />
			<div className="flex flex-col gap-2">
				<h6 className="text-[#101828] font-medium text-sm">Create Wireframe</h6>
				<p className="text-[#475467] text-sm">10:30am - 11:30am</p>
			</div>
			<p className="ml-auto text-[#475467] text-sm">Today</p>
		</div>
	);
}
