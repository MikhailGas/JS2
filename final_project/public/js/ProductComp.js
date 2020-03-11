Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {
        filter(){
            let regexp = new RegExp(this.$parent.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
            
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="goodsList">
            <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
      return {
          /**
           * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
           * то мы легко можем получить доступ к ним используя свойство $root.
           * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
           */
          cartAPI: this.$root.$refs.cart, // добираемся до компонента корзины, чтобы далее использовать метод добавления
      };
    },

    template: `
    <div class="goodsList__item">
                <img :src="img" alt="Some img">
                <div class="desc">
                    <h3 class="h3 h3_goodsList">{{product.product_name}}</h3>
                    <p class="p p_goodsList">{{product.price}}₽</p>
                    <button class="button button_goodsList" @click="cartAPI.addProduct(product)">Купить</button>
<!-- 1                    <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>-->
<!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
                </div>
            </div>
    `
});
