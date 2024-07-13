/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#333a73',
				secondary: '#387adf',
				coa: '#50c4ed',
			},
		},
	},
	plugins: [],
};
