import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.387299d1.js","_app/immutable/chunks/scheduler.0d687f07.js","_app/immutable/chunks/index.ac4a47bf.js","_app/immutable/chunks/paths.c6705f29.js"];
export const stylesheets = ["_app/immutable/assets/2.60a2357f.css"];
export const fonts = [];