import { codeToHtml } from "shiki";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";

import fs from "node:fs/promises";

export default function shiki() {
  return {
    name: "source2shiki",
    enforce: "post", // needed because vite does stuff with css files, so the final code is always undefined
    async transform(_, file) {
      if (!file.includes(".shiki")) return
      if (!file.includes("?inline")) throw new Error("Can't transform src files not imported with inline option. Please add ?inline to your import")

      file = file.replace("?inline", "")

      const code = await fs.readFile(file, { encoding: "utf-8" });

      const html = await codeToHtml(code, {
        lang: file.split(".").at(-1), // returns hopefully the correct language suffix ()
        theme: "nord",
        transformers: [
          transformerNotationHighlight(),
          transformerNotationDiff(),
        ],
      });

      return {
        code: `export default \`${html}\``,
        map: null,
      };
    },
  };
}
