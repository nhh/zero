import { Navbar } from "../components/navbar";

export const DefaultLayout = (_: any, children: any) => (
  <main class="w-full h-full flex">
    <style></style>

    <div class="h-full hidden lg:block overflow-y-auto">
      <Navbar></Navbar>
    </div>

    <div class="h-full overflow-y-auto w-full px-12 py-10">{children}</div>
  </main>
);
