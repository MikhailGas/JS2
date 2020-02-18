const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
  { title: 'suit', price: 400},
];

const renderGoodsItem = ({title, price}, src = 'http://placehold.it/') => {
  return `<div class="goodsList__item">
            <img src="${src}100x100/cccccc/ffffff.gif&text=${title}" />
            <h3 class="h3 h3_goodsList">${title}</h3>
            <p class="p p_goodsList">${price}</p>
            <button class="button button_goodsList">Добавить в корзину</button>

        </div>`;
};

const renderGoodsList = list => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goodsList').innerHTML = goodsList.join('');
}

renderGoodsList(goods);
