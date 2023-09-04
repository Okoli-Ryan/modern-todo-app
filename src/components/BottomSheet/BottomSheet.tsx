interface IBottomSheet {
	children: React.ReactNode;
	minHeight?: number;
}

export default function BottomSheet({ children, minHeight = 0 }: IBottomSheet) {
	return (
		<>
			<div className="fixed inset-0 z-10 bg-black/25"></div>
			<div className="fixed bottom-0 left-0 z-20 w-full bg-white rounded-t-3xl" style={{ height: minHeight ? `${minHeight}%` : "max-content" }}>
				<div className="relative z-30">{children}</div>
			</div>
		</>
	);
}
