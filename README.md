# Zero Framework

Zero is not a framework. Zero is an approach to modern frontend development without the need of a framework. Technically, Zero is a set of types and functions that enables jsx to be transpiled in dom nodes.

## Goals

I see modern frameworks not as technology, they are a products. Often your users don't need or even benefit from updates, but you do - the developer. With zero, you never have to update any framework, because its just the dom.

## Non-Goals

Become a framework, that can have breaking changes and or updates. Provide a npm package so you can download the code.

## How does it look?

```tsx
import { Navbar } from "../components/navbar.tsx";
import { HttpClient } from "../plugins/http.ts";

// Use self made dependency injection
export default async ({ $http }: { $http: HttpClient }) => {
  // Have dom nodes as references
  let title = <div>loading...</div>;
  let helloWorld = <text>Hello world</text>;

  // Have dom nodes as configurable factories
  const MyButton = (props: {title: string}) => <button>{props.title}</button>

  // You dont need reactivity, just use getter/setter
  setInterval(() => (helloWorld.innerText = Math.random().toString()), 25);

  // Use modern dom api's to your advantage (replaceWith)
  $http
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((response) => title.replaceWith(<h1>{response.title}</h1>));

  return (
    <section>
      <style comment="This style only applies to the parent node (section)" >display: flex;</style>
      <Navbar></Navbar>
      
      {title}
      {helloWorld}
      <MyButton />
    </section>
  );
};
```

## How does it work?

Under the hood zero is just a few snippets and vite/esbuild configuration that configures the transpiling process of jsx to js. All functions return dom nodes, herefore you can use all methods available on the dom.

<details>
    <summary>Runtime javascript</summary>

```js
export const __createElement = (tag, props, ...children) => {
  if (typeof tag === "function") {
    return tag(props, ...children);
  }

  if (typeof tag === "object") {
    throw "Cannot parse object, please use function";
    // element = structuredClone(tag)
  }

  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().substr(2), value);
    else element.setAttribute(name, value.toString());
  });

  // Todo this style feature might be a little too frameworky
  // It is more or less the same as styled components
  // https://styled-components.com/
  children.forEach((child) => {
    if (typeof child === "object" && child.tagName === "STYLE") {
      element.style = child.innerText;
    } else {
      appendChild(element, child);
    }
  });

  return element;
};

const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

// Todo
export const __createFragment = (props, ...children) => {
  return children;
};
```
</details>

Vite config

```js
// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    loader: 'tsx', // Tell vite to resolve tsx fle
    jsxInject: `import {__createElement, __createFragment} from '~/jsx.js'`, // Tell vite to inject this functions into the main js file
    jsxFactory: '__createElement', // Tell vite to use this name as jsx factory function. in react its React.createElement or "h" in preact.
    jsxFragment: '__createFragment', // Tell vite to use this name as jsx fragment function. in react its React.createElement or "h" in preact.
  },
});

```

## Types

Zero provides a set of types, that enable a good developer experience. Under the hood, the types just connect jsx types with dom types. There are caveats, but in general it works fine.

```ts
// https://dev.to/ferdaber/typescript-and-jsx-part-ii---what-can-create-jsx-22h6
// https://github.com/ferdaber --> Der weiss evtl ne Menge
declare global {
  namespace Zero {
    type WithClass<Type> = {
      [Property in keyof Type]?: Type[Property];
    } & {
      class?: string;
    };

    // interface ThisTypeMightBeUseful extends HTMLElementTagNameMap { }
    interface HtmlElement extends Omit<HTMLElement, "style"> {
      style?: string;
    }

    // Maybe we can construct a joined type with these stuff
    // This example excludes style from the HTMLElementTagNameMap
    // type NoCart = Omit<HTMLElementTagNameMap, "style">;
    interface HtmlElementTagNameMap
      extends Omit<HTMLElementTagNameMap, "style"> {
      style?: string;
    }

    interface SvgElementTagNameMap extends Omit<SVGElementTagNameMap, "style"> {
      style?: string;
    }
  }

  namespace JSX {
    interface Element extends Zero.HtmlElement {
      new (props: any, context?: any): Zero.WithClass<Zero.HtmlElement>;
    }

    type ElementClass = never;
    type ElementAttributesProperty = never;
    type ElementChildrenAttribute = never;

    // custom prop types for example <div myProp={} />
    type IntrinsicAttributes = {
      [Property in keyof Zero.HtmlElement]?: Zero.HtmlElement[Property];
    };

    type IntrinsicClassAttributes = {
      [Property in keyof Zero.HtmlElement]?: Zero.HtmlElement[Property];
    };

    type SvgAny = {
      [Property in keyof Zero.SvgElementTagNameMap]?: any;
    };

    type IntrinsicElements = {
      // SVG does not exist in
      [Property in keyof Zero.HtmlElementTagNameMap]?: Zero.WithClass<
        Zero.HtmlElementTagNameMap[Property]
      >;
    } & SvgAny;
  }
}
```
