const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bordeaux: "#63252A",
				lemon: "#FCF175",
				oatmeal: "#F8F3E4",
				olive: "#87AA7F",
				peach: "#FAD0C0",
			},
			fontSize: {
				xxs: "0.65rem",
			},
			minHeight: {
				"1/2": "50vh;",
			},
			scale: {
				97: ".97",
			},
			strokeWidth: {
				3: 3,
			},
		},
		fontFamily: {
			sans: [
				"Jost",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			mono: [
				"Source Code Pro",
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace",
			],
		},
		screens: {
			xs: "480px",
			...defaultTheme.screens,
		},
	},
	variants: {
		extend: {
			opacity: ["active"],
			scale: ["active"],
			backdropSaturate: ["hover"],
		},
	},
};
