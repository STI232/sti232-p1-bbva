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
        if(this.type == 'select'){
            this.innerHTML = `
            <link rel="stylesheet" href="globalStyles.css">
            <link rel="stylesheet" href="/src/components/transAmigo/style.css">
                <article id="tu">
                <div class="amigop-perfil">
                    <img src=${this.image} alt="">
                    <div>
                        <h5 class="button2"><b>${this.name}</b></h5>
                        <h5 class="caption">Miembro</h5>
                    </div>
                </div>
                    <h5>${this.price}</h5>
                    
                </article>`
        } else if(!this.type){
        this.innerHTML = `
            <link rel="stylesheet" href="globalStyles.css">
            <link rel="stylesheet" href="/src/components/transAmigo/style.css">
                <article id="trasamigop">
                <div class="amigop-perfil">
                    <img src=${this.image} alt="">
                    <div>
                        <h5 class="button2"><b>${this.name}</b></h5>
                        <h5 class="caption">Miembro</h5>
                    </div>
                </div>
                    <h5>${this.price}</h5>
                    
                </article>`
        }
        
        
    }
}

customElements.define('trans-amigo', transAmigo);
export default transAmigo;