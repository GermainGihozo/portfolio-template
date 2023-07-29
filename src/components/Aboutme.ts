const template = document.createElement('template');

export class Aboutme extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

template.innerHTML = `
    <style>
    article {
            display: grid;
            grid-template-columns: auto 25%;
            align-items: center;
            gap: 1rem;
        }
        
        a {
            text-decoration: none;
            color: var(--primary-clr);
        }

        img {
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
        <h3>Hi, I am UWITONDANISHEMA Muslim</h3>
        <p>A highly organized and detail-oriented programmer and designer with 2 years of experience.</p>
        <p>I specialize in creating cohesive, efficient, and effective web applications that seamlessly integrate front-end and back-end technologies. My deep understanding of both development areas allows me to deliver robust applications with exceptional user experiences.
        </p>
        <p>I have gained alot of experience from working with small teams and gained awards from my <a href="https://twitter.com/IPRC__Ngoma/status/1565622456269824001">innovative projects</a>.</p>
        <a href="/resume.pdf">
        <button-c>my resume</button-c>
        </a>
        </div>
        <img src="https://avatars.githubusercontent.com/u/103575700?v=4" >
        </article>
        <div class="skills">
      </div>
    </section>
`;
