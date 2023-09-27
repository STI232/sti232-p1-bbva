class headerTitle extends HTMLElement {
    constructor() {
        super();
        this.name = this.getAttribute('title');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['title']
    }
    

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="/src/components/headerTitle/headerTitleStyles.css">
        <div class="header-title">
                    <div>
                        <img src="../images/arrow.png" alt="" padding-rigt="5%">
                    </div>
                    <div>
                        <h3 class="subtitle1">${this.title}</h3>
                    </div>
                </div>
        `;
    }
}

customElements.define('header-title', headerTitle);
export default headerTitle;