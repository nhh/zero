import { Header } from "./header";

export interface CardsProps {
  [key: string]: string;
}

export const Cards = (_: CardsProps, children: any) => (
  <div class="flex-auto max-w-2xl min-w-0 lg:max-w-none">
    <article>
      <Header
        title="Zero Framework"
        subtitle="Utilizing typescript and jsx for a productive developer experience, without any runtime dependencies"
        pre="Introduction"
      ></Header>

      <h3 class="mt-16 text-base font-bold tracking-tight text-slate-900">
        Get set up quickly
      </h3>

      <ul class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <li>
          <a
            href="#"
            class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white"
          >
            <h4 class="font-bold tracking-tight text-slate-900">
              Connect your GitHub account
            </h4>

            <p class="text-slate-600">
              What you need to know before connecting your GitHub account
            </p>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white"
          >
            <h4 class="font-bold tracking-tight text-slate-900">
              Add your first content type
            </h4>

            <p class="text-slate-600">Learn what content types are in Zero</p>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white"
          >
            <h4 class="font-bold tracking-tight text-slate-900">
              Invite your first team member
            </h4>

            <p class="text-slate-600">
              You write your best marketing content with your team
            </p>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="block px-6 py-4 border rounded bg-slate-50 border-slate-100 hover:bg-white"
          >
            <h4 class="font-bold tracking-tight text-slate-900">
              Publish your content
            </h4>

            <p class="text-slate-600">
              Publishing with Zero is really just one click of a button
            </p>
          </a>
        </li>
      </ul>

      {children ?? <></>}
    </article>
  </div>
);
