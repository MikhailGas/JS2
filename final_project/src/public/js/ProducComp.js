const product = {
    props: ['product', 'img'],
    data() {
        return {
            /**
             * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
             * то мы легко можем получить доступ к ним используя свойство $root.
             * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
             */
            cartAPI: this.$root.$refs.header.$refs.cart, // добираемся до компонента корзины, чтобы далее использовать метод добавления
            
        };
    },

    template: `
    <div class="product">
                <a href="#"><img :src="product.img" alt="Product__1" class="product__img" ></a>
                <div class="product__text">
                    <a href="" class="product__name">{{product.product_name}}</a>
                    <div class="product__price">{{product.price}}₽</div>
                </div>
                <a @click="cartAPI.addProduct(product)" class="add_to_cart"><img class="add_to_cart_img" src="/img/Forma_1_copy.svg" alt="">Add to cart</a>
            </div>

    
    `
};

const products = {
    components: { product },
    data(){
        return {
            products: [],
            filtered: [],
            imgCatalog: `img/`,
        }
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        
        this.$parent.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products-box">
            <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
        </div>
    `
};

export default products;
