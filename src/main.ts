import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { Button, Header, Portfolio } from "./components/index.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="container">
    <header-c></header-c>
   
    <div class="hero">
    <h1>Creative web developer and designer</h1>
        <p class="text-mute">
          I bring solutions to the teams. Highly organised and detail oriented fullstack web developer.
        </p>
        <button-c id="counter" type="button"></button-c>
        </div>
        <div class="skills">
        <p>
        <a href="https://vitejs.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      </p>
    </div>
    <portfolio-c></portfolio-c>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
customElements.define("header-c", Header);
customElements.define("portfolio-c", Portfolio);
customElements.define("button-c", Button);
