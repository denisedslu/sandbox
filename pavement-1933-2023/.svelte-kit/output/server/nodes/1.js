

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cf744b50.js","_app/immutable/chunks/scheduler.0d687f07.js","_app/immutable/chunks/index.7924dd0b.js","_app/immutable/chunks/singletons.231d340e.js","_app/immutable/chunks/paths.df03ed27.js"];
export const stylesheets = [];
export const fonts = [];
