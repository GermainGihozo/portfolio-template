import { setupCounter } from './counter.ts';
import { Button, Header, Portfolio, SkillsSlider } from './components/index.ts';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <header-c></header-c>
   
    <div class="hero">
    <h1>Creative web developer and designer</h1>
        <p class="text-mute">
        As a highly organized and detail-oriented programmer and designer, Muslim is always striving to improve his skills and creativity. His passion for learning and collaborating with individuals and teams of all sizes and levels of creativity drives him forward.
        </p>
        <button-c id="counter" type="button"></button-c>
        </div>
        <div class="skills">
          <skillslider-c></skillslider-c>
    </div>
    <portfolio-c></portfolio-c>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
customElements.define('header-c', Header);
customElements.define('portfolio-c', Portfolio);
customElements.define('button-c', Button);
customElements.define('skillslider-c', SkillsSlider);
