
export class ProductoHtml {

    constructor(title, price, thumbnail){
        this.title=title;
        this.price=price;
        this.thumbnail=thumbnail;
    }

    crearProductoHtml(){    
        const card=document.createElement('div');
        card.classList.add('card');
        card.innerHTML=`
        <img src="${this.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">$${this.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
    return card;


}
}