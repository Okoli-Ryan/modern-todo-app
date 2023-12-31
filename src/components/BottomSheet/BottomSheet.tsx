interface IBottomSheet {
	children: React.ReactNode;
	minHeight?: number;
	show: boolean;
	className?: string;
	onClose: () => void;
}

export default function BottomSheet({ children, minHeight = 0, show, className = "" }: IBottomSheet) {
	return (
		<>
			{show && (
				<div className={className}>
					<div className="fixed inset-0 z-40 bg-black/25"></div>
					<div className="fixed bottom-0 left-0 z-50 w-full bg-white rounded-t-3xl" style={{ height: minHeight ? `${minHeight}%` : "max-content" }}>
						<div className="relative z-30">{children}</div>
					</div>
				</div>
			)}
		</>
	);
}
