
class CustomCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Add Bootstrap CSS via CDN
        const bootstrapLink = document.createElement('link');
        bootstrapLink.setAttribute('rel', 'stylesheet');
        bootstrapLink.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
        this.shadowRoot.appendChild(bootstrapLink);

        // Optional: Add custom styles if needed
        const customStyleLink = document.createElement('link');
        customStyleLink.setAttribute('rel', 'stylesheet');
        customStyleLink.setAttribute('href', './components/components.css'); // Adjust path as per your project structure
        this.shadowRoot.appendChild(customStyleLink);
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <div>
            <div class="carousel">
            <div class="carousel-slides">
                <div class="carousel-slide active">
                    <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Slide 1">
                </div>
                <div class="carousel-slide">
                    <img src="https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg" alt="Slide 2">
                </div>
                <!-- Add more slides as needed -->
            </div>
        
            <div class="carousel-buttons">
                <!-- Buttons will be dynamically added via JavaScript -->
            </div>
        </div>
        <script src="./index.js"> </script>
</div>
        `;
    }
}

customElements.define('custom-carousel', CustomCarousel);
