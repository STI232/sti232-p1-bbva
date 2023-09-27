class headerTitle extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/src/components/headerTitle/headerTitleStyles.css">
        <div class="header-title">
                    <div>
                        <img src="../../images/arrow.png" alt="" padding-rigt="5%">
                    </div>
                    <div>
                        <h3 class="subtitle1">Cuentas compartidas</h3>
                    </div>
                </div>
        `;
    }
}

customElements.define('header-title', headerTitle);
export default headerTitle;