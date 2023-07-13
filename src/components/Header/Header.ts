import { Nav } from './Nav';
import { ThemeToggler } from './ThemeToggler';

const template = document.createElement('template');
export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('theme-toggler-c', ThemeToggler);
customElements.define('nav-c', Nav);

template.innerHTML = `
<style>

header {
    height: 70px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
  font-size: 1.5em;
  font-weight: bold;
  user-select: none;
  }
  
</style>
<header>
<span>Muslim</span>
<nav-c></nav-c>

  <theme-toggler-c></theme-toggler-c>
</header>
`;
