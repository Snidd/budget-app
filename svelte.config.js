import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import tsconfigPaths from 'vite-tsconfig-paths';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [tsconfigPaths()],
			define: {
				'import.meta.vitest': false
			},
			test: {
				includeSource: ['src/**/*.{js,ts}'],
				globals: true,
				environment: 'jsdom',
				setupFiles: ['src/tests/setupTests.ts']
			}
		}
	}
};

export default config;
