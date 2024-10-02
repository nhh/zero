import "./style.css";
import App from "./pages/index.tsx";
import Login from "./pages/login.tsx";
import Dashboard from "./pages/dashboard.tsx";
import { HttpClient } from "./plugins/http.ts";

const NotFound = () => (
  <section class="h-screen w-screen bg-red-200 text-2xl text-black">
    404
  </section>
);

const routes = {
  "#/": App,
  "": App,
  "#/login": Login,
  "#/dashboard": Dashboard,
};

// WILDE TYPESCRIPT ACTION
export type Routes = keyof typeof routes;

let lastHash: string = "initial";

const root = document.getElementById("app");

// Depenceny injection
const context: any = {};
context["$http"] = new HttpClient();

const render = async () => {
  if (lastHash === location.hash) return;

  lastHash = location.hash;
  const func = routes[location.hash as Routes] ?? NotFound;

  if (root?.firstChild) {
    root?.firstChild?.replaceWith(await func({ ...context }));
  } else {
    root?.appendChild(await func({ ...context }));
  }
};

window.onpopstate = render;

render();
