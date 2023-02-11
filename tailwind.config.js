/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#29395f",
				gray: "#808080",
				navbar: {
					DEFAULT: "#031C30",
				},
				'navbar-button': {
					DEFAULT: "#667A8A",
				}
			},
		},
		screens: {
			'2xl': { 'max': '1535px' },
			'xl': { 'max': '1279px' },
			'lg': { 'max': '1023px' },
			'md': { 'max': '767px' },
			'sm': { 'max': '639px' },
		}
	},
	plugins: [],
};
