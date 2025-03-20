/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{ts,js,vue}'],
	theme: {
	  extend: {
		colors:{
			'primary-yellow': "rgb(255, 153, 51)",
			'primary-black': "#0a0a0a"
		}
	  },
	},
	plugins: [],
  }