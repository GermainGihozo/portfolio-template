import { Aboutme } from './components/Aboutme.ts';
import { ContactForm } from './components/ContactForm.ts';
import { Footer } from './components/Footer.ts';
import { Button, Header, Portfolio } from './components/index.ts';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');
if (app != null)
  app.innerHTML = `
    <header-c></header-c>
   
    <section class="hero">
        <article>
          <h1>Creative web developer and designer</h1>
          <p class="text-mute">
          As a highly organized and detail-oriented programmer and designer, Muslim is always striving to improve his skills and creativity. His passion for learning and collaborating with individuals and teams of all sizes and levels of creativity drives him forward.
          </p>
          <button-c>My Creative Journey</button-c>
        </article>
        <image class="illustration" src="/greating.webp" />
        </section>
        <portfolio-c></portfolio-c>
        <about-c></about-c>
        <contact-c></contact-c>
        `;
// <footer-c></footer-c>

customElements.define('header-c', Header);
customElements.define('portfolio-c', Portfolio);
customElements.define('button-c', Button);
customElements.define('about-c', Aboutme);
customElements.define('footer-c', Footer);
customElements.define('contact-c', ContactForm);
