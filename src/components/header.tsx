export const Header = (props?: {title?: string, subtitle?: string, pre?: string}) => (
  <>
    <header>
      <p class="text-base font-medium text-slate-500">{props?.pre ?? '[props.pre]'}</p>

      <h1 class="text-3xl font-bold tracking-tight text-slate-900">
        {props?.title ?? '[props.title]'}
      </h1>
    </header>
    <p class="mt-2 text-xl text-slate-600">
      {props?.subtitle ?? '[props.subtitle]'}
    </p>
  </>
);
