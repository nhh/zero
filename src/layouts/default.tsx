import { Navbar } from "../components/navbar";

export const DefaultLayout = (_: any, children: any) => (
  <main class="w-full h-full flex px-8">
    <style></style>

    <div class="h-full hidden lg:block">
      <Navbar></Navbar>
    </div>

    {children}
  </main>
);
