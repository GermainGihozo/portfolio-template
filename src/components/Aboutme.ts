import { SkillsSlider } from '.';

const template = document.createElement('template');

export class Aboutme extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('skillslider-c', SkillsSlider);

template.innerHTML = `
    <style>
    article {
            display: grid;
            grid-template-columns: auto 15% auto;
            gap: 1rem;
        }
        
        a {
            text-decoration: none;
            color: var(--primary-clr);
        }

        img {
            border-radius: 50%;
            aspect-ratio: 1;
            width: 100%;
            object-fit: cover;
        }

        h2 {
            font-size: 2em;
            line-height: 1.1;
        }

        @media (max-width: 780px) {
            article {
            grid-template-columns: auto 20%;

            }
        }
        @media (max-width: 550px) {
            article {
            grid-template-columns: auto;
            justify-items: center;
            text-align: center;
            }
            
            h2 {
                text-align: center;
            }

            img {
                width: 200px;
            }
        }

    </style>
    <section>
        <h2>Who I am!</h2>
        <article>
        <div>
        <h3>About me.</h3>
        <p>Lorem ipsum dolor sit amet consectetur <a href="/success">adipisicing</a> elit. Minima temporibus placeat expedita repellat laborum quod laboriosam, omnis eos non aliquid eveniet debitis aperiam consectetur facilis labore sunt eaque nam cum.</p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/103575700?v=4" >
        <div>
        <h3>Experience.</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus placeat expedita repellat laborum quod laboriosam, omnis eos non aliquid eveniet debitis aperiam consectetur facilis labore sunt eaque nam cum.</p>
        <a href="/resume.pdf">
        <button-c>my resume</button-c>
        </a>
        </div>
        </article>
        <div class="skills">
        <skillslider-c></skillslider-c>
      </div>
    </section>
`;
