import { defineConfig } from 'vitest/config'
import Vue from "@vitejs/plugin-vue"
import path from 'path';

export default defineConfig({
	plugins: [Vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/example/src'),
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
	},
	root: "."
})
