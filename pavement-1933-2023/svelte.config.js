import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 	preprocess: [vitePreprocess()],
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/pavement-1933-2023' : '',
        }
    }
};
 
export default config;


