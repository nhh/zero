import { Navbar } from "../../components/navbar.tsx";
import { HttpClient } from "../../plugins/http.ts";

// export default async (ctx: CTX) => {

const flex = <style>
  display: flex;
</style>

export default async ({ $http }: { $http: HttpClient }) => {
  let ha1 = <div>loading...</div>;

  let str = <text>Hello world</text>;
  //let str = <div>Hello world</div>

  // We do have reactivity, but only with getter/setter
  setInterval(() => (str.innerText = Math.random().toString()), 25);

  // reactive alternative, when let str = "" and is used as prop in a div
  // setInterval(() => str = Math.random().toString(), 25)
  $http
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res: any) => res.json())
    .then((response: any) => ha1.replaceWith(<h1>{response.title}</h1>));

  return (
    <section>
      {flex}
      <Navbar></Navbar>
      {ha1}
      {str}
      {Math.round(Math.random()) % 2 === 0 ? (
        <style>background-color: red;</style>
      ) : (
        <style>background-color: green;</style>
      )}
    </section>
  );
};
