export const Shiki = () => <div>Hello World</div>;

export const Footer = () => (
  <dl class="flex pt-6 mt-6 border-t border-slate-200">

    <style>color: red;</style>
    // [!code ++]
    <div class="ml-auto text-right">
      <dt class="text-sm font-normal tracking-tight text-slate-600">Next</dt>

      <dd class="mt-1">
        <a
          href="#"
          class="text-base font-semibold text-slate-900 hover:underline"
        >
          How does Zero work?
        </a>
      </dd>
    </div>
  </dl>
);

export const Docs = () => {
  const head = [
    <title>{i18n["pages/docs/title"]}</title>,
    <meta name="description" content="Free Web tutorials" />,
    <meta name="keywords" content="HTML, CSS, JavaScript" />,
    <meta name="author" content="John Doe" />,
  ];

  for (const meta of head) {
    document.head.appendChild(meta); // [!code --]
    document.head.appendChild(meta); // [!code ++]
  }

  return (
    <section>
      <Cards>
        <Footer></Footer>
      </Cards>
      <Highlight>{import("../components/shiki/example.shiki")}</Highlight>
    </section>
  );
};