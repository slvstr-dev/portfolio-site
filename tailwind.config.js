const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false,
	theme: {
		screens: {
			xs: "480px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				lemon: "#FCF175",
				peach: "#FAD0C0",
				oatmeal: "#F8F3E5",
			},
			fontSize: {
				xxs: "0.65rem",
			},
			scale: {
				97: ".97",
			},
			strokeWidth: {
				3: 3,
			},
		},
	},
	variants: {
		extend: { opacity: ["active"], scale: ["active"] },
	},
	plugins: [],
};
