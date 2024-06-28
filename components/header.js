class DefaultHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const bootstrapLink = document.createElement("link");
    bootstrapLink.setAttribute("rel", "stylesheet");
    bootstrapLink.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    );
    this.shadowRoot.appendChild(bootstrapLink);

    const customStyleLink = document.createElement("link");
    customStyleLink.setAttribute("rel", "stylesheet");
    customStyleLink.setAttribute("href", "./components/components.css");
    this.shadowRoot.appendChild(customStyleLink);
  }

  connectedCallback() {
    this.shadowRoot.innerHTML += `
        <div class="header">
            <div class="header-wrap"> 
                <h3>Sign-in</h3>
                <h3>Sign-up</h3>
            </div>
        </div>
        `;
  }
}

customElements.define("default-header", DefaultHeader);
