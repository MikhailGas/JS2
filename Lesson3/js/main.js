const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ
let getRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status !== 200) {
            reject([xhr.status, xhr.statusText]);
          } else {
            resolve(xhr.responseText);
          }
        }
      };
      xhr.send();
    })
  
};

getRequest(`${API}/catalogData.json`)
.then((data) => {
    console.log(JSON.parse(data));
    })
.catch(([kod, text]) => {
    console.log(`${kod}: ${text}`);
});

class Cart{
    constructor(){
        this.cartGoods = [];
        this._getProducts().then((data) => {
            this.cartGoods = data;
            console.log(data);
        })
    }
    
    _getProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
              console.log('Error:', error);
            });
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
    this._getProducts().then(data => {
        
        this.goods = data;
        this.render();
    });
    
    this.totalCost();

    
  }
  _getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
          console.log('Error:', error);
        });
  }

  
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
      listHtml += goodItem.render();
      this.allProducts.push(goodItem);
    });
      
      document.querySelector('.goodsList').insertAdjacentHTML('beforeend', listHtml);
      document.querySelectorAll('.button_goodsList').forEach(elem => {
            elem.addEventListener('click', (event) => {
           cart.addToCart(event.target.parentElement.attributes[1].value); 
        });
        });
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
new Cart()
