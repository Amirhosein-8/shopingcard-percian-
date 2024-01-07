// /** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// plugins: [require('daisyui')],
	theme: {
		extend: {
			fontFamily: {
				Inter: 'Inter',
				Iran: 'Iran',
			},
			container: {
				center: true,
				padding: {
					sm: '2px',
					md: '4px',
					lg: '6px',
					xl: '8px',
				},
			},
			transitionProperty: {
				'transition-width': 'width',
			},
		},
	},
};
