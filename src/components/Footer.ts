const template = document.createElement('template');

export class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

template.innerHTML = `
    <style>
        footer {
            min-height: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        a {
            text-decoration: none;
            margin-left: 1rem;
            color: inherit;
        }

        hr {
            border: .5px solid var(--primary-clr-transparent);
        }

    </style>
    <hr>
    <footer>
        <theme-toggler-c></theme-toggler-c>
        <span>
        <a href="/#">my blog</a>
        <a href="/#">about me</a>
        <a href="/#">skills</a>
        <span>
    </footer>
`;
