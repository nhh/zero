import { Routes } from "../main";

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

const nestedUlStyle = "pl-3 mt-3 space-y-2 border-l"
export const Navbar = (_: any, __: any) => (
  <nav class="h-full w-64 pr-8 text-base lg:text-sm overflow-y-auto border-r">
    <img class="h-24 mx-auto" src="https://www.chartjs.org/img/chartjs-logo.svg"></img>
    <ul
      role="list"
      class="h-full py-7 space-y-8"
    >
      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">
          Introduction
        </h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">Installation</NavLink>
          <NavLink href="#/docs/quickstart-guide">Quick start guide</NavLink>
          <NavLink href="#/docs/quickstart-guide">How it works</NavLink>
        </ul>
      </li>

      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">Guides</h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">Export differences</NavLink>
          <NavLink href="#/docs/quickstart-guide">Change head tags</NavLink>
          <NavLink href="#/docs/quickstart-guide">Scoped styles</NavLink>
          <NavLink href="#/docs/quickstart-guide">Add script tags</NavLink>
          <NavLink href="#/docs/quickstart-guide">Add a mounted function</NavLink>
          <NavLink href="#/docs/quickstart-guide">Fetch data</NavLink>
          <NavLink href="#/docs/quickstart-guide">Internationalization (i18n)</NavLink>
          <NavLink href="#/docs/quickstart-guide">Add a layout</NavLink>
          <NavLink href="#/docs/quickstart-guide">Implement a router</NavLink>
          <NavLink href="#/docs/quickstart-guide">Store state</NavLink>
          <NavLink href="#/docs/quickstart-guide">Work with the DOM</NavLink>
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
          <NavLink href="#/docs/quickstart-guide">Image optimization with imgproxy</NavLink>
        </ul>
      </li>

      <li>
        <h3 class="font-semibold tracking-tight text-slate-900">
          Examples
        </h3>

        <ul role="list" class={nestedUlStyle}>
          <NavLink href="#/docs/quickstart-guide">TailwindCSS</NavLink>
        </ul>
      </li>
    </ul>
  </nav>
);
