/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#29395f",
				navbar: {
					DEFAULT: "#031C30",
				},
				'navbar-button': {
					DEFAULT: "#667A8A",
				}
			},
		},
	},
	plugins: [],
};
