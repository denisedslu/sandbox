

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.e1678bef.js","_app/immutable/chunks/scheduler.0d687f07.js","_app/immutable/chunks/index.7924dd0b.js"];
export const stylesheets = ["_app/immutable/assets/0.48bfac49.css"];
export const fonts = [];
