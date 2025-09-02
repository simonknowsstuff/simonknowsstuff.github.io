import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        allowedHosts: ['mentioned-yours-trio-gibraltar.trycloudflare.com']
    }
});
