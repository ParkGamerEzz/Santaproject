import { N as head, D as attr_class, O as attr_style, C as pop, z as push, E as stringify } from "../../chunks/index.js";
function ContextMenu($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" class="svelte-phn5z9">`;
  });
  $$payload.out += `<div style="transition: bottom 5s, left 0.3s;" class="bottom-0 absolute bottom-0 right-17 text-1xl z-5; svelte-phn5z9">⛄</div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
}
function _page($$payload, $$props) {
  push();
  let buttonPosition = { top: "50%", left: "50%" };
  let chrispos = 0;
  $$payload.out += `<div><div class="relative w-full h-screen bg-blue-200 overflow-hidden"><div class="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 z-0"></div> <div class="absolute top-20 left-20 text-white text-4xl z-10">❄️</div> <div class="absolute top-40 right-40 text-white text-4xl z-10">❄️</div> <div class="absolute top-80 left-80 text-white text-4xl z-10">❄️</div> <div class="absolute bottom-40 right-20 text-white text-4xl z-10">❄️</div> <div class="absolute bottom-80 left-40 text-white text-4xl z-10">❄️</div> `;
  ContextMenu($$payload);
  $$payload.out += `<!----> <div class="absolute bottom-0 left-10 text-6xl z-10">🎄</div> <div></div> <div style="transition: bottom 5s, left 0.3s;"${attr_class(`bottom-${stringify(chrispos)} absolute bottom-0 right-10 text-6xl z-11;`)}>🎄</div> <h1 class="absolute top-10 left-1/2 transform -translate-x-1/2 text-5xl font-bold text-black z-20">Brain Car Ice Rage</h1> <div class="absolute top-20 left-20 w-16 h-16 z-20"></div> <div class="absolute top-20 right-20 w-16 h-16 z-20"></div> <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-16 h-16 z-20"></div> <div class="absolute bottom-20 left-1/4 w-16 h-16 z-20"></div> <button${attr_style(`position: absolute; top: ${stringify(buttonPosition.top)}; left: ${stringify(buttonPosition.left)}; transition: top 0.3s, left 0.3s;`)} class="bg-purple-700 hover:bg-purple-800 text-yellow-300 font-bold py-4 px-16 rounded-full shadow-lg text-2xl z-30">Play</button></div></div>`;
  pop();
}
export {
  _page as default
};
