const template = document.createElement('template');

export class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
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
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #bd34fe;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>

<button><slot></slot></button>

`;
