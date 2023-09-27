class transAmigo extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute('name');
        this.detail = this.getAttribute('detail');
        this.price = this.getAttribute('price');	
        this.image = this.getAttribute('image');
        this.type = this.getAttribute('type');
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes(){
        return ['name', 'detail', 'image', 'price','type']
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
                    <h5>${this.name}</h5>
                    <h5>Miembro</h5>
                </div>
                <div>
                    <h5>${this.price}</h5>
                    <h5>en Viaje a Cancún</h5>
                </div>
            </article>
        `
    }
}

customElements.define('trans-amigo', transAmigo);
export default transAmigo;