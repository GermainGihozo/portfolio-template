import { Card } from "./Card";

const template = document.createElement("template");

export class Portfolio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {}
}
customElements.define("card-c", Card);

template.innerHTML = `
  <style>
    section {
        margin-top: 4rem;
    }

    h2 {
        font-size: 2em;
        line-height: 1.1;
    }

    .works {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, auto))
    }

  </style>
  <section>
  <h2>My Portfolio</h2>
  <p>These are my projects from my best works, they include personal and team projects.</p>
  <div class="works">
  <card-c></card-c>
  <card-c></card-c>
  <card-c></card-c>
  <card-c></card-c>
  </div>
  </section>
`;
