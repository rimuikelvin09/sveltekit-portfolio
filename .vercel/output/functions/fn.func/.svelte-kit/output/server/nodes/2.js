import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DMfwZnDE.js","_app/immutable/chunks/scheduler.DVdbQ_i_.js","_app/immutable/chunks/index.YkrStDvy.js","_app/immutable/chunks/index.D9gEhcZS.js"];
export const stylesheets = ["_app/immutable/assets/2.Dyttpgte.css"];
export const fonts = [];
