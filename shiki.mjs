import { codeToHtml } from 'shiki'
import fs from 'node:fs/promises'

const file = process.argv[2]

if(!file || file === "") throw "ENOENT: No such file or director: "+file

const code = await fs.readFile(file, {encoding: 'utf-8'})

const html = await codeToHtml(code, {
  lang: 'tsx',
  theme: 'nord'
})

console.log(html)