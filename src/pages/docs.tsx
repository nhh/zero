import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import { i18n } from "../plugins/i18n";
import { Highlight } from "../components/highlight";

export const Docs = () => {
  const head = [
    <title>{i18n["pages/docs/title"]}</title>,
    <meta name="description" content="Free Web tutorials" />,
    <meta name="keywords" content="HTML, CSS, JavaScript" />,
    <meta name="author" content="John Doe" />,
  ];

  for (const meta of head) {
    document.head.appendChild(meta);
  }

  return (
    <section>
      <Cards>
        <Footer></Footer>
      </Cards>
      <Highlight>{import("../blocks/example.shiki")}</Highlight>
    </section>
  );
};
