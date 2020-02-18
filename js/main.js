class Cart {
    constructor() {
        this.cartList = [];
    }
    
    sddToCart(id){
        this.cartList += CartItem.getItem(id);
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

const list = new GoodsList();
list._fetchGoods();
list.render();
list.totalCost();

