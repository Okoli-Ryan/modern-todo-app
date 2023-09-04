/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Inter var, sans-serif"],
		},
		extend: {
			colors: {
                primary: "#3F5BF6",
				gray: "#475467",
                darkGray: "#101828",
                textColor: "#101828"
			},
		},
	},
	plugins: [],
};
