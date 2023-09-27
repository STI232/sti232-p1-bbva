class Footer extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/src/components/footer/footerStyles.css">
            
        `;
    }
}

customElements.define('footer', Footer);
export default Footer;