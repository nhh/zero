import { Navbar } from "../components/navbar.tsx";

export default () => {
  console.log("Dashboard rendered");

  const Counter = () => {
    let count = 0;
    const cmp = <div></div>;
    cmp.addEventListener("incr", () => {
      console.log("here");
      count++;
      cmp.innerText = count.toString();
    });
    cmp.innerText = count.toString();
    return cmp;
  };

  const counter = Counter();
  const counter2 = Counter();

  const Btn = (props: any) => <button {...props}>Increment</button>;

  return (
    <section>
      <Navbar></Navbar>
      <h1 class="text-4xl text-red-400">Dashboard!!</h1>
      {counter}
      {counter2}
      <Btn
        class="p-4 rounded bg-red-400"
        onclick={() => {
          counter.dispatchEvent(new CustomEvent("incr"));
          console.log("Clicked");
        }}
      ></Btn>
      <Btn
        class="p-4 rounded bg-green-400"
        onclick={() => {
          counter2.dispatchEvent(new CustomEvent("incr"));
          console.log("Clicked");
        }}
      ></Btn>
    </section>
  );
};
