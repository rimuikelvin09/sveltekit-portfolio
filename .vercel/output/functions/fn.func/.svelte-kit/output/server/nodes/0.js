

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D9f1WRK7.js","_app/immutable/chunks/scheduler.DVdbQ_i_.js","_app/immutable/chunks/index.YkrStDvy.js"];
export const stylesheets = [];
export const fonts = [];
