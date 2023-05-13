const template = document.createElement('template');
const root = document.querySelector('html') as HTMLHtmlElement;
export class ThemeToggler extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot?.addEventListener('click', () => {
      this.shadowRoot?.querySelector('#sun')?.classList.toggle('hide');
      this.shadowRoot?.querySelector('#moon')?.classList.toggle('hide');
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    });
  }
}

template.innerHTML = `
<style>
  .hide {
    opacity: 0;
  }
  #sun, #moon {
    position: absolute;
    transition: all 0.1s;
    cursor: pointer;
  }


  .icon {
    stroke: var(--primary-clr);
  }
  

  .theme-toggler {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .4s;
  }

  .theme-toggler:hover {
    background-color: var(--bg-transparent);

  }
</style>
  <div class="theme-toggler">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="moon"
        class="hide"
      >
        <path
          d="M2.02997 12.42C2.38997 17.57 6.75997 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 8.99997 11.97 8.97997 7.14002C8.96997 5.84002 9.23997 4.61002 9.72997 3.49002C10.27 2.25002 9.61997 1.66002 8.36997 2.19002C4.40997 3.86002 1.69997 7.85002 2.02997 12.42Z"
          stroke-width="1.5"
          stroke-linecap="round"
          fill="#bd34fe"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="sun"
      >
        <path
          d="M12 18.5C13.7239 18.5 15.3772 17.8152 16.5962 16.5962C17.8152 15.3772 18.5 13.7239 18.5 12C18.5 10.2761 17.8152 8.62279 16.5962 7.40381C15.3772 6.18482 13.7239 5.5 12 5.5C10.2761 5.5 8.62279 6.18482 7.40381 7.40381C6.18482 8.62279 5.5 10.2761 5.5 12C5.5 13.7239 6.18482 15.3772 7.40381 16.5962C8.62279 17.8152 10.2761 18.5 12 18.5V18.5Z"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#bd34fe"
        />
        <path
          d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#bd34fe"
        />
      </svg>
      </div>
`;
