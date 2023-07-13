const template = document.createElement('template');

export class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    const hasOutline = this.getAttribute('outline') === 'true';
    const btn = this.shadowRoot?.querySelector('button');
    if (btn != null) {
      btn.style.backgroundColor = hasOutline ? 'none' : '#bd34fe';
    }
  }
}

template.innerHTML = `
<style>
button {
    border-radius: 8px;
    border: none;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: transform 0.25s;
  }
  button:hover {
    transform: scale(.99);
  }
  button:focus,
  button:focus-visible {
    transform: scale(.99);
  }
</style>

<button><slot></slot></button>

`;
