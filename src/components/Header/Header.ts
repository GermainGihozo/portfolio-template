import { Nav } from "./Nav";
import { ThemeToggler } from "./ThemeToggler";

const template = document.createElement("template");
ThemeToggler;
export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("theme-toggler-c", ThemeToggler);
customElements.define("nav-c", Nav);

template.innerHTML = `
<style>

header {
    height: 70px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  
  span {
  font-size: 2.2em;
  font-weight: bold;
  }
</style>
<header>
<div class="container">
<span>Muslim</span>
<nav-c></nav-c>

  <theme-toggler-c></theme-toggler-c>
</div>
</header>
`;
