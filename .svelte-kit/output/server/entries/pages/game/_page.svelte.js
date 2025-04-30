import { z as push, P as attr, O as attr_style, Q as bind_props, C as pop, R as copy_payload, S as assign_payload, T as ensure_array_like, K as escape_html } from "../../../chunks/index.js";
import "../../../chunks/index2.js";
function ImageItem($$payload, $$props) {
  push();
  let {
    name,
    src,
    width,
    x,
    y,
    xTarget,
    yTarget,
    item1pos = void 0
  } = $$props;
  $$payload.out += `<img${attr("src", src)} alt=""${attr("width", width)} draggable="true" class="dragme svelte-ikvsx7"${attr_style(`position: absolute; left: ${x}px; top: ${y}px;`)}>`;
  bind_props($$props, { item1pos });
  pop();
}
const imgGame1 = [
  {
    name: "asdasdasdadsadsads",
    src: "https://www.bing.com/th/id/OIP.8EYPyCU4GgOfq6qrzRH_OwHaE8?w=185&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    width: 200,
    X: 1146,
    Y: 474
  },
  {
    name: "img2",
    src: "https://th.bing.com/th/id/R.7c82c0df9eb3b7304fbc14177b5c99b3?rik=8OS2OIGcQYHGQw&riu=http%3a%2f%2feskipaper.com%2fimages%2fdogs-9.jpg&ehk=n6wOQHT95TC8i9b0YyN3aolkl1HKmaTo3RJt6mIBr0M%3d&risl=&pid=ImgRaw&r=0",
    width: 300,
    X: 317,
    Y: 412
  }
];
function _page($$payload, $$props) {
  push();
  let allitempos = [];
  let item1pos = [];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(imgGame1);
    $$payload2.out += `<div class="bg-blue-600 w-screen h-screen"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      ImageItem($$payload2, {
        name: item.name,
        src: item.src,
        width: item.width,
        x: item.X,
        y: item.Y,
        xTarget: item.xTarget,
        yTarget: item.yTarget,
        get item1pos() {
          return item1pos;
        },
        set item1pos($$value) {
          item1pos = $$value;
          $$settled = false;
        }
      });
    }
    $$payload2.out += `<!--]--> ${escape_html(item1pos)} <br> ${escape_html(JSON.stringify(allitempos))}</div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
