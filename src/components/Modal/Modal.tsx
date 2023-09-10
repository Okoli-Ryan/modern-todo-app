import { useEffect, useState } from "react";

interface IModal {
	children: React.ReactNode;
	open: boolean;
	className?: string;
	content: React.ReactNode;
	onOpenChange: (e: boolean) => void;
}

export default function Modal({ children, open, className = "", onOpenChange, content }: IModal) {
	const [isModalOpen, setIsModalOpen] = useState(open);

	function onOpenChangeModal() {
		onOpenChange(!isModalOpen);
		setIsModalOpen((prev) => !prev);
	}

	useEffect(() => {
		setIsModalOpen(open);
	}, [open]);

	return (
		<>
			<div onClick={onOpenChangeModal}>{children}</div>
			{isModalOpen && (
				<div className={className}>
					<div className="fixed inset-0 z-[100] bg-black/25" onClick={onOpenChangeModal}></div>
					<div className="fixed left-0 z-[120] w-full bg-white rounded-t-3xl">
						<div className="relative z-30">{content}</div>
					</div>
				</div>
			)}
		</>
	);
}
