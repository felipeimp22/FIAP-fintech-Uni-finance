class DefaultInput extends HTMLElement {
    constructor() {
        super(); 
        this.attachShadow({ mode: 'open' }); 

        const bootstrapLink = document.createElement('link');
        bootstrapLink.setAttribute('rel', 'stylesheet');
        bootstrapLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
        this.shadowRoot.appendChild(bootstrapLink); 

        const customStyleLink = document.createElement('link');
        customStyleLink.setAttribute('rel', 'stylesheet');
        customStyleLink.setAttribute('href', './components/components.css');
        this.shadowRoot.appendChild(customStyleLink); 
    }

    connectedCallback() {
        this.shadowRoot.innerHTML += `
            <button type="button" class="btn btn-primary">Get Started</button>
        `;
    }
}

customElements.define('default-input', DefaultInput);
