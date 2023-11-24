import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://uwplse.org/pl-hw-blog/',
	integrations: [mdx(), sitemap()],
});
