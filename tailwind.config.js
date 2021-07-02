module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false,
	theme: {
		extend: {
			fontSize: {
				xxs: "0.65rem",
			},
			colors: {
				lemon: "#FCF175",
				peach: "#FAD0C0",
				oatmeal: "#F8F3E5",
			},
			strokeWidth: {
				3: 3,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
