import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { Header } from "./components/index.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <header-c></header-c>
   <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    -->
    <h1>Creative web developer and designer</h1>
    <p class="text-mute">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
customElements.define("header-c", Header);
