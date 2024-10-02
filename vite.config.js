// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import shiki from "./shiki.js"

export default defineConfig({
  plugins: [shiki()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    loader: 'tsx',
    jsxInject: `import {__createElement, __createFragment} from '~/jsx.js'
`,
    jsxFactory: '__createElement',
    jsxFragment: '__createFragment',
  },
});
