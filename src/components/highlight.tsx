import { createHighlighterCore } from "shiki/core";

// Todo: Using shiki client side in the browser is WRONG
// It is meant to be used AHEAD of time. But this is not possible in zero atm
// https://nuxt.com/blog/shiki-v1

// Idea: Having a nodemjs file that accepts a file name as param
// That takes the file, loads it as string and passes it to shiki
// It then returns the html as string, so we can use it inside the webite
// smth like: shiki.mjs src/main.tsx =>
export default (props: any, children: string) => {
  const target = <div {...props}>...loading</div>;

  createHighlighterCore({
    themes: [import("shiki/themes/nord.mjs")],
    langs: [import("shiki/langs/tsx.mjs")],
    loadWasm: import("shiki/wasm"),
  }).then((h) => {
    const html = h.codeToHtml(children, {
      lang: "tsx",
      theme: "nord",
    });
    target.innerHTML = html;
  });

  return target;
};
