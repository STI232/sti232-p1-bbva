class Beneficio extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('title');
        this.image = this.getAttribute('image');
        this.type = this.getAttribute('points');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['title', 'image', 'points']
    }
    
    attributeChangedCallback(propName, oldvalue, newValue){
        this[propName] = newValue;
        this.render();
        
    }

    render(){
        this.innerHTML = `
        
            <article>
                <img src=${this.image} alt="">
                <div>
                    <h5>${this.title}</h5>
                    <button>${this.points} puntos</button>
                </div>
            </article>
        `
    }
}

customElements.define('beneficio-puntos', Beneficio);
export default Beneficio;