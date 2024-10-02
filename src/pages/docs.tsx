import { Cards } from "../components/cards";
import { Footer } from "../components/footer";
import Highlight from "../components/highlight";

export default (_?: any) => {
  const head = [
    <title>Zero Docs</title>,
    <meta name="description" content="Free Web tutorials" />,
    <meta name="keywords" content="HTML, CSS, JavaScript" />,
    <meta name="author" content="John Doe" />,
  ];

  for (const meta of head) {
    document.head.appendChild(meta);
  }

  return (
    <section>
      <Highlight class="hidden rounded p-2">
        {`const head = [
    <title>Zero Docs</title>,
    <meta charset="UTF-8" />,
    <meta name="description" content="Free Web tutorials" />,
    <meta name="keywords" content="HTML, CSS, JavaScript" />,
    <meta name="author" content="John Doe" />,
]`}
      </Highlight>

      <Cards>
        <Footer></Footer>
      </Cards>
    </section>
  );
};
