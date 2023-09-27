class bbvaFooter extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="src/components/bbvaFooter/bbvaFooterStyles.css">
        <div class="footer">
            <footer>
                <a class="home" href="#"><img src="/src/images/home.png" alt=""></a>
                <a class="card" href="#"><img src="/src/images/card.png" alt=""></a>
                <a class="setting" href="#"><img src="/src/images/settings.png" alt=""></a>
                </footer>           
            </div> 
        `;
    }
}

customElements.define('bbva-footer', bbvaFooter);
export default bbvaFooter;