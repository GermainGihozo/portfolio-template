import { Button, Header, Portfolio, SkillsSlider } from './components/index.ts';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');
if (app != null)
  app.innerHTML = `
  <div class="container">
    <header-c></header-c>
   
    <section class="hero">
        <article>
        <h1>Creative web developer and designer</h1>
        <p class="text-mute">
        As a highly organized and detail-oriented programmer and designer, Muslim is always striving to improve his skills and creativity. His passion for learning and collaborating with individuals and teams of all sizes and levels of creativity drives him forward.
        </p>
        <button-c>My Creative Journey</button-c>
        </article>
        <image class="illustration" src="/greating.png" />

        </section>
        <div class="skills">
          <skillslider-c></skillslider-c>
    </div>
    <portfolio-c></portfolio-c>
    </div>
  </div>
`;

customElements.define('header-c', Header);
customElements.define('portfolio-c', Portfolio);
customElements.define('button-c', Button);
customElements.define('skillslider-c', SkillsSlider);
