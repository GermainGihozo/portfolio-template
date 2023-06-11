const template = document.createElement('template');
export class Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

template.innerHTML = `
  <style>

    section {
      margin-block: 4rem;
    }

    section > div {
      display: grid;
      grid-template-columns: 50% auto;
      gap: .5rem;
    }

    article {
      background-color: var(--primary-clr-transparent);
      border-radius: .4rem;
      padding: 1.2rem;
      padding-bottom: 0;
    }

    h3 {
      margin-block: 0;
    }

    @media (max-width: 600px) {
      section > div {
        text-align: center;
      grid-template-columns: auto;

      }
    }

  </style>
  <section>
  <h2><slot name="header"></slot></h2>
    <div>
      <article>
      <slot name="logo"></slot>
      <p><slot name="description"></slot></p>
      <slot name="picture"></slot>
      <slot name="github"></slot>
      </article>
    <div>
    <slot name="mobile"></slot>
    <p><slot name="gains"></slot></p>
    <h3>Tech stacks</h3>
    <slot name="techstack"></slot>
    <slot name="liveweb"></slot>
    </div>
  </section>
`;
