

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.1628a178.js","_app/immutable/chunks/scheduler.0d687f07.js","_app/immutable/chunks/index.ac4a47bf.js"];
export const stylesheets = ["_app/immutable/assets/0.06cc1332.css"];
export const fonts = [];
