import { Routes } from "../main";
import { Optimize } from "./optimize";

const NavLink = (props: { href: Routes; active?: boolean }, children: any) => (
  <li>
    <a
      href={props?.href ?? ""}
      class={`hover:underline  hover:text-slate-800 ${
        props.active ? "text-slate-900" : "text-slate-600"
      }`}
      aria-current="page"
    >
      {children ?? "No text available"}
    </a>
  </li>
);

const nestedUlStyle = "pl-3 mt-3 space-y-2 border-l";
const logoUrl =
  "https://pluspng.com/img-png/react-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png";

export const Navbar = (_: any, __: any) => (
  <nav class="h-full text-base lg:text-sm w-full border-r px-8">
    <Optimize>
      <img class="hidden" height={40} width={40} src={logoUrl}></img>
    </Optimize>
    <ul role="list" class="py-4 space-y-8">
      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">
          Introduction
        </h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/">Home</NavLink>
          <NavLink href="#/docs/quickstart-guide">Installation</NavLink>
          <NavLink href="#/docs/quickstart-guide">Quickstart (vite)</NavLink>
          <NavLink href="#/docs/quickstart-guide">How it works</NavLink>
          <NavLink href="#/docs/quickstart-guide">Motivation</NavLink>
        </ul>
      </li>

      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">Guides</h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">
            Module export differences
          </NavLink>
          <NavLink href="#/docs/quickstart-guide">Change head tags</NavLink>
          <NavLink href="#/docs/quickstart-guide">Scoped styles</NavLink>
          <NavLink href="#/docs/quickstart-guide">Add script tags</NavLink>
          <NavLink href="#/docs/quickstart-guide">
            Add a mounted function
          </NavLink>
          <NavLink href="#/docs/quickstart-guide">Fetch data</NavLink>
          <NavLink href="#/docs/quickstart-guide">Reactivity</NavLink>
          <NavLink href="#/docs/quickstart-guide">
            Internationalization (i18n)
          </NavLink>
          <NavLink href="#/docs/quickstart-guide">Add a layout</NavLink>
          <NavLink href="#/docs/quickstart-guide">Implement a router</NavLink>
          <NavLink href="#/docs/quickstart-guide">Store state</NavLink>
          <NavLink href="#/docs/quickstart-guide">Working with the DOM</NavLink>
          <NavLink href="#/docs/quickstart-guide">
            Component communication
          </NavLink>
        </ul>
      </li>

      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">
          Integrations
        </h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">Use TailwindCSS</NavLink>
          <NavLink href="#/docs/quickstart-guide">Use Bulma.css</NavLink>
          <NavLink href="#/docs/quickstart-guide">Write your own css</NavLink>
          <NavLink href="#/docs/quickstart-guide">Charts with chart.js</NavLink>
          <NavLink href="#/docs/integrations/shiki">
            Syntax highlighting with Shiki
          </NavLink>
          <NavLink href="#/docs/quickstart-guide">
            Image optimization with imgproxy
          </NavLink>
        </ul>
      </li>

      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">Examples</h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">TailwindCSS</NavLink>
        </ul>
      </li>
    </ul>
  </nav>
);
