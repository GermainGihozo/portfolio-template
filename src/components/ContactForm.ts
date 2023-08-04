const template = document.createElement('template');

export class ContactForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

template.innerHTML = `
    <style>
    section {
          margin-top: 4rem;
        }
        
        h2 {
            font-size: 2em;
            line-height: 1.1;
        }
        input, textarea {
            display: block;
            width: 100%;
            font: inherit;
            padding: 0.6em 1.2em;
            margin-block: 1em;
            border-color: #bd34fe;
            border-radius: 8px;
            outline: none;
            border-color: transparent;
            transition: border-color .4s;
            // background-color: #fff3;
        }
        input:focus, textarea:focus {
            border-color: #bd34fe;
        }
    </style>
    <section>
        <h2>Fill free to contact me!</h2>
                <h3>I respond in less than 2 hour.</h3>
                <form>
                    <label>
                        <span>Email</span>
                        <input type="email" placeholder="client@gmail.com">
                    </label>
                    <label>
                        <span>Message</span>
                        <textarea placeholder="job offer ..."></textarea>
                    </label>
                    <button-c>sen message</button-c>
                </form>
    </section>
`;
