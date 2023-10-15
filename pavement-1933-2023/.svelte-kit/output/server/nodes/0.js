

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7edeb267.js","_app/immutable/chunks/scheduler.0d687f07.js","_app/immutable/chunks/index.50bf94b8.js"];
export const stylesheets = ["_app/immutable/assets/0.48bfac49.css"];
export const fonts = [];
