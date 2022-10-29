// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	plugins: [vue()],
	server: {
		host: 'localhost',
		open: '/example/index.html'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/example/src'),
		},
	},
	define: {
		'process.env': {},
	},
});
