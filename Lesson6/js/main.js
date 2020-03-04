const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(err => {
                
                    this.$refs.error.errorConnection(err);
                    
                })
        },
    },
    mounted() {
        //console.log(this);
    }
});





/*const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    searchProducts: [],
    isSearch: false,
    goods: [],
    imgCatalog: 'https://placehold.it',
    searchLine: '',
    isVisibleCart: false,
    cartList: [],
    noGoods: false,
    totalPrice: 0,
    goodsCount: 0,
    showCount: false,
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addToCart(id){
      this.goodsCount++;
      this.showCount = true;
      let flag = true;
      this.cartList.forEach(elem => {
          if(elem.id_product == id) {
              elem.product_quantity++;
              flag = false;
          }
      })
      if(flag){
          this.products.forEach(elem => {
              if(elem.id_product == id){
                  this.cartList.push({
                      id_product: elem.id_product,
                      product_name: elem.product_name,
                      price: elem.price,
                      product_quantity: 1,
                  });
                  

              }
              //break;
          })
          flag = !flag;
          this.noGoods = false;
          
      }
      this.totalPriceCart();
    },
      
    delProduct(id) {
        this.goodsCount--;
        let flag = true;
      this.cartList.forEach(elem => {
          if(elem.id_product == id && elem.product_quantity > 1) {
              elem.product_quantity--;
              flag = false;
          }
      })
      if(flag){
          this.cartList = this.cartList.filter(elem => elem.id_product != id);
          flag = !flag;
          this.noGoods = false;
          
      }
      this.totalPriceCart();
      if(this.cartList.length == 0) {
          this.noGoods = true;
          this.showCount = false;
      }
    },
      
    FilterGoods(event){
        event.preventDefault();
        if(this.searchLine){
            reg = new RegExp(`${this.searchLine}`, 'ig');
            this.searchProducts = this.products.filter(data => reg.test(data.product_name));  
            this.goods = this.searchProducts;
        } else this.goods = this.products;
    },
    cartListShow(){
        this.isVisibleCart = !this.isVisibleCart
        if(this.cartList.length == 0) this.noGoods = true;
        else this.noGoods = false;
    },
     totalPriceCart(){
         this.totalPrice = 0;
         this.cartList.forEach(elem => {
             this.totalPrice += elem.price * elem.product_quantity;
         })
     }
  },
    
  // хук жизненного цикла
  mounted(){
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
        this.goods = this.products;
        this.goods.push({product_name:'Лампа'});
      });
  }
});

*/