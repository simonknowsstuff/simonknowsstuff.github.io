import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: adapter({
            fallback: 'index.html'
        }),
        prerender: {
            entries: ['*']
        },
        paths: {
            base: ''
        }
    }
};

export default config;
