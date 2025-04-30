

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game/g001/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.UwQAah1_.js","_app/immutable/chunks/CWj6FrbW.js"];
export const stylesheets = [];
export const fonts = [];
