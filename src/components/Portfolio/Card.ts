import github from '../../../../../../../../../github.png';

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

    img {
      width: 100%;
      object-fit: cover;
      border-radius: .4rem;
    }

  </style>
  <article>
  <img src="${github}" class="logo" alt="Vite logo" />
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid.

  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid.
  
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid.</p>
  <button-c>view on github</button-c>
  <button-c outline="true">view live website</button-c>
  </article>
`;
