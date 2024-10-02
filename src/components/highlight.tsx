export const Highlight = (_: any, children: Promise<any>) => {
  if (!children) return <></>;
  const code = <div class="p-2 [&_.shiki]:p-4 [&_.shiki]:rounded"></div>;
  Promise.resolve(children).then((html) => (code.innerHTML = html.default));
  return code;
};
