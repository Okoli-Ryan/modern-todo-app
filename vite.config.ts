import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@components", replacement: path.resolve(__dirname, "src/components") },
			{ find: "@models", replacement: path.resolve(__dirname, "src/models") },
			{ find: "@constants", replacement: path.resolve(__dirname, "src/constants") },
			{ find: "@lib", replacement: path.resolve(__dirname, "src/lib") },
			{ find: "@", replacement: path.resolve(__dirname, "src") },
		],
	},
	optimizeDeps: {
		exclude: ["date-fns"],
	},
});
