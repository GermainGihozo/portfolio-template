const template = document.createElement("template");

export class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
  }
}

template.innerHTML = `
<style>

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    gap: 1em;
  }

  #nav-toggler {
    display: none;
  }
  
  a {
    text-decoration: none;
    border-radius: 7px;
    color: inherit;
    font-weight: 400;
    transition: all 0.4s ease;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .logo span {
    position: absolute;
    left: 80%;
  }

  .active,
  a:hover {
    color: var(--nav-text-clr);
  }
  </style>
<nav>
<ul class="links">
  <li><a href="/#">Home</a></li>
  <li><a href="/#portfolio">work</a></li>
  <li><a href="/#contacts">contacts</a></li>
  <li><a href="/#">skills</a></li>
  <li>
    <a data-authvisible="false" href="/auth/login.html">login</a>
    <a data-authvisible="true" href="/auth/logout.html">logout</a>
  </li>
</ul>
</nav>
`;
