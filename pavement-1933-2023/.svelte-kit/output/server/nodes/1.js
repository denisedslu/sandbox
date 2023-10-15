

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a197372b.js","_app/immutable/chunks/scheduler.0d687f07.js","_app/immutable/chunks/index.50bf94b8.js","_app/immutable/chunks/singletons.6c8bf0d8.js","_app/immutable/chunks/paths.aea43d79.js"];
export const stylesheets = [];
export const fonts = [];
