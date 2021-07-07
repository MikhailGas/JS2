const cartItem = {
    props: ['cartItem', 'img'],
    template: `
                
                        <div class="cart__products">
                            <img :src="cartItem.img" alt="cart_1" class="product__cart__img">
                            <div class="product__cart__text">
                                <a href="#" class="product__cart__name">{{ cartItem.product_name }}</a>
                                <div class="product__raiting">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <p class="product__cart__price">{{ cartItem.quantity }}  x   {{ cartItem.price }}</p>
                            </div>
                            <p @click="$emit('remove', cartItem)" class="product__delete"><i class="fa fa-times-circle"></i></p>
                        </div>
                
    `
};

const cart = {
    components: { cartItem },
    data(){
      return {
          imgCart: 'img/',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$parent.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            console.log(item);
            if (item.quantity > 1) {
                this.$parent.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.$parent.$parent.deleteJson(`/api/cart/${item.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        },
        changeQuantity(item){
            
            if (item.quantity != 0) {
               this.$parent.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: +item.quantity})
                    .then(data => {
                        if (data.result === 1) {
                            
                        }
                    });
            } else {
                this.$parent.$parent.deleteJson(`/api/cart/${item.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        }
    },
    mounted(){
        this.$parent.$parent.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    computed:{
        total(){
            let tot = 0;
            this.cartItems.forEach(el => {
                tot += el.price * el.quantity;
                
            });
            return tot;
            
        }
    },
    template: `
        <div class="header__cart">
            <img  src="/img/cart.svg" alt="cart" @click="showCart = !showCart">
            
            <div class="cart__box" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>
             <div class="total__price">
                            <p class="total">TOTAL</p>
                            <p class="price">{{ total }}</p>
                        </div>
                        <a href="checkout.html" class="cart__button">Checkout</a>
                        <router-link to="/cart" class="cart__button">Перейти в корзину</router-link>
            </div>
        </div>`
};

export default cart;
