const date = new Date().toDateString();

const Top = (props: { title: string }) => (
  <h1 class="text-red-400 text-2xl">{props.title}</h1>
);

const MyButton = (props: any) => {
  const button = <button {...props}></button>;
  return button;
};

const styles = <style>background-color: pink;</style>;

export const MarketingCTA = (props: { title: string }) => (
  <div class="bg-white">
    {styles}
    <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <Top title={props.title}></Top>
      <div
        onclick={() => {
          console.log("Diviv");
        }}
        class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
      >
        <style>background-color: green;</style>
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset={1} stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Boost your productivity today: {date} <br />
            Start using our app today.
          </h2>
          <p aria-hidden={true} class="mt-6 text-lg leading-8 text-gray-300">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla.
          </p>
          <div
            onclick={() => console.log()}
            class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
          >
            <a
              test={true}
              href="#"
              class="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
            <MyButton
              class="bg-white p-2 border rounded min-w-16 min-h-8"
              onclick={() => alert("Hi")}
            >
              {styles}
            </MyButton>
          </div>
        </div>

        <div class="relative mt-16 h-80 lg:mt-8">
          <img
            class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width={120}
            height={100}
          />
        </div>
      </div>
    </div>
  </div>
);
