import { Card } from './Card';
import { projects } from './projects';

const template = document.createElement('template');

export class Portfolio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(): void {
    const worksElement =
      this.shadowRoot?.querySelector<HTMLDivElement>('.works');
    if (worksElement != null)
      projects.forEach(
        ({
          title,
          githubLink,
          liveWebsite,
          logo,
          description,
          images,
          techStacks,
        }) => {
          worksElement.innerHTML += `<card-c>
        <span slot="header">${title}</span>
        <img src=${logo} class="logo" slot="logo" >
        <img src=${images[0]} slot="picture" />
        <span slot="description">${description}</span>
        <img src=${images[1]} slot="mobile" alt="Vite logo" />
        <div slot="techstack" id="techstack">${techStacks.reduce(
          (a, b) => a + `<span>${b}</span>`,
          ''
        )}</div>
        <a slot="liveweb" href=${liveWebsite}>view live website</a>
        <a slot="github" href=${githubLink} class="secondary">github repository</a>
        </card-c>`;
        }
      );
  }
}
customElements.define('card-c', Card);

template.innerHTML = `
  <style>


    h2 {
        font-size: 2em;
        line-height: 1.1;
    }

    a {
      border-radius: .4rem;
      color: inherit;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      text-decoration: none;
      margin-top: .5rem;
      background-color: var(--primary-clr-transparent);
      display: inline-block;
    }

    .secondary {
      background-color: var(--secondary-clr);

    }
    img {
      width: 100%;
      object-fit: cover;
      border-radius: .4rem;
    }

    .logo {
      width: 34px;
    }
    #techstack {
      margin-top: 1rem;
    }

    #techstack span {
      border-radius: .4rem;
      border: 1px solid transparent;
      padding: 0.2em .6em;
      font-size: .8em;
      background-color: var(--bg-transparent);
      display: inline-block;
      margin: .5rem;

    }
  </style>
  <section>
  <h2>Crafting Digital Experiences</h2>
  <p>I specialize in creating cohesive, efficient, and effective web applications that seamlessly integrate front-end and back-end technologies. My deep understanding of both development areas allows me to deliver robust applications with exceptional user experiences.</p>
  <div class="works"></div>
  </section>
`;
