export default function Greeting() {
	return (
		<div className="mt-4">
			<h1 className="text-2xl font-semibold text-DarkGray">Good {getGreeting()}</h1>
			<h3 className="text-gray">You got some task to do.</h3>
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
