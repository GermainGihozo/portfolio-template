import { NavToggler } from './NavToggler';

const template = document.createElement('template');

export class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    this.shadowRoot?.querySelector('menu-c')?.addEventListener('click', () => {
      this.shadowRoot?.querySelector('ul')?.classList.toggle('show');
    });
  }
}
customElements.define('menu-c', NavToggler);

template.innerHTML = `
<style>

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
  }

  
  a {
    text-decoration: none;
    border-radius: 7px;
    color: inherit;
    font-weight: 400;
    transition: all 0.4s ease;
    padding-inline: .5rem;
  }

  .active,
  a:hover {
    color: var(--nav-text-clr);
  }

  menu-c {
    display: none;
  }
  .show {
    display: flex;
  }
  @media (max-width: 540px) {
    menu-c {
      display: flex;
    }
    ul {
      flex-direction: column;
      z-index: 1;
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      // width: 100%;
      background-color: var(--body-bg);
      padding: 2rem;
      padding-top: 0;
      display: none;
    }

    li {
      padding-block: .5rem;
    }
  }

  </style>
  <menu-c></menu-c>
  <ul>
    <li><a href="/#">Home</a></li>
    <li><a href="/#portfolio">work</a></li>
    <li><a href="/#contacts">contacts</a></li>
    <li><a href="/#">skills</a></li>
  </ul>
`;
