class Cart {
    constructor() {
        this.cartList = [];
        this.itemsNumber = 0;
        this.list = {};
        this.total = 0;
        
        document.querySelector('.cartBox').insertAdjacentHTML('beforeend', `<p class="totalCart">Сумма: 0</p>`);
    }
    
    addToCart(id){
        const cartI = new CartItem(goodsList.allProducts[id])
        this.list[this.itemsNumber] = goodsList.allProducts[id].price;
        this.cartList = cartI.render(this.itemsNumber);
        document.querySelector('.cartBox').insertAdjacentHTML('beforeend', this.cartList);
        this.itemsNumber++;
        document.querySelectorAll('.button_cartList').forEach(elem => {
            elem.addEventListener('click', event => {
                this.deleteFromCart(event.target.parentElement.attributes[1].value);
                
            })});
        this.total = 0;
        for(let key in this.list){
            this.total += this.list[key];
        }
        
        document.querySelector('.totalCart').innerText = `Сумма: ${this.total}`;
    }
    
    deleteFromCart(id){
        document.querySelectorAll('.cartList__item').forEach(elem => {
            if(elem.attributes[1].value == id) {
                elem.remove(elem);
                
            };
            this.total = 0;
            delete this.list[id];
            for(let key in this.list){
                this.total += this.list[key];
            }

            document.querySelector('.totalCart').innerText = `Сумма: ${this.total}`;
        })
    }
    
}

class CartItem {
    
    constructor(goods, img='http://placehold.it/'){
        this.img = img;
        this.title = goods.title;
        this.price = goods.price;
        
    };
    
    
    render(itemsNumber) {
        
    return `<div class="cartList__item" data-id="${itemsNumber}">
                <img src="${this.img}50x50/cccccc/ffffff.gif&text=${this.title}" />
                <h3 class="h3 h3_cartList">${this.title}</h3>
                <p class="p p_cartList">${this.price}</p>
                <button class="button button_cartList">&otimes;</button>
            </div>`;
  }
}


class GoodsItem {
  constructor(id, title, price, src = 'http://placehold.it/') {
    this.id = id;
    this.title = title;
    this.price = price;
    this.src = src;
  }
  render() {
    return `<div class="goodsList__item" data-id="${this.id}">
            <img src="${this.src}100x100/cccccc/ffffff.gif&text=${this.title}" />
            <h3 class="h3 h3_goodsList">${this.title}</h3>
            <p class="p p_goodsList">${this.price}</p>
            <button class="button button_goodsList">Добавить в корзину</button>

        </div>`;
  }
}
class GoodsList {
  constructor() {
    this.goods = [];
    this.allProducts = [];
    this._fetchGoods();
    this.render();
    this.totalCost();

    
  }
  _fetchGoods() {
    this.goods = [
      { id: 0, title: 'Shirt', price: 150 },
      { id: 1, title: 'Socks', price: 50 },
      { id: 2, title: 'Jacket', price: 350 },
      { id: 3, title: 'Shoes', price: 250 },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.id, good.title, good.price);
      listHtml += goodItem.render();
      this.allProducts.push(goodItem);
    });
      
      document.querySelector('.goodsList').insertAdjacentHTML('beforeend', listHtml);
  }
  
  totalCost() {
      let totalcost = 0;
      this.allProducts.forEach(price => {
          totalcost += price.price;
      })
      document.querySelector('.total').append(`Суммарная стоимость ${totalcost}`);
  }

}

goodsList = new GoodsList();
cart = new Cart();
document.querySelectorAll('.button_goodsList').forEach(elem => {
    elem.addEventListener('click', (event) => {
   cart.addToCart(event.target.parentElement.attributes[1].value); 
});
});
