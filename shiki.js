import { codeToHtml } from 'shiki'
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";

import fs from 'node:fs/promises'

export default function shiki() {
  return {
    name: 'transform-file',
    async transform(_, file) {
      if (!file.includes('.shiki')) return

      const code = await fs.readFile(file, {encoding: 'utf-8'})

      const html = await codeToHtml(code, {
        lang: file.split(".").at(-1), // returns hopefully the correct language suffix ()
        theme: 'nord',
        transformers: [transformerNotationHighlight(), transformerNotationDiff()],
      })

      return {
        code: (`export default \`${html}\``),
        map: null
      }
    },
  }
}