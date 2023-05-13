const template = document.createElement('template');

export class NavToggler extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot?.addEventListener('click', () => {
      this.shadowRoot
        ?.querySelector('#nav-toggler')
        ?.classList.toggle('nav-active');
    });
  }
}

template.innerHTML = `
<style>
#nav-toggler {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .4s;
  }
  
  #nav-toggler:hover {
    background-color: var(--bg-transparent);

  }
  .icon {
    stroke: var(--primary-clr);
  }

  .nav-active #bars {
    display: none;
  }
   #times {
    display: none;
    transform: translateY(-10%);
  }
  .nav-active #times {
    display: block;
  }
</style>
<span id="nav-toggler">
<svg
  id="bars"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 7H21M3 12H21M3 17H21"
    class="icon"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>
<svg
  id="times"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_215_393)">
    <path
      d="M3 7L20.5 22.5M27 12H45M4 23L20.5 7"
      class="icon"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_215_393">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>
</span>

`;
