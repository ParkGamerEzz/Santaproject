import "clsx";
import { D as attr_class, E as stringify, F as store_get, G as unsubscribe_stores, C as pop, z as push } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index3.js";
const test = writable([true, false, true]);
function NavBar($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<nav class="bg-white p-5 flex justify-between items-center"><h1 class="text-2xl">Stage</h1> <div class="space-x-5"><button${attr_class(`bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-${stringify(store_get($$store_subs ??= {}, "$test", test)[0] ? "100 cursor-pointer" : "50 cursor-not-allowed")} `)}>1</button> <button${attr_class(`bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-${stringify(store_get($$store_subs ??= {}, "$test", test)[1] ? "100 cursor-pointer" : "50 cursor-not-allowed")} `)}>2</button> <button${attr_class(`bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-${stringify(store_get($$store_subs ??= {}, "$test", test)[2] ? "100 cursor-pointer" : "50 cursor-not-allowed")} `)}>3</button></div> <button></button></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  NavBar($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
