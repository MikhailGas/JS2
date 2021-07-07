import cart from '../js/CartComp'

const cartPage = {
    
    data(){
        return {
            cartItems: this.$parent.$refs.header.$refs.cart.cartItems,
            cartAPI: this.$root.$refs.header.$refs.cart,
        }
    },
    components: {
        cart,
    },
    methods:{
        subtotal(item){
            return item.price * item.quantity;
        },
        change(item){
            console.log('Hello');
            this.cartAPI.changeQuantity(item);
        }
    },
    mounted(){
        this.$parent.$refs.header.$refs.cart.showCart = false;
        
    },
    
    template: `
        <div>

        <section class="breadCrumbs">
            <div class="breadCrumbs__wrapper center">
                <h3 class="breadCrumbs__pageName">Корзина</h3>
                <ul class="breadCrumbs__ul">
                    <li class="breadCrumbs__list"><router-link to="/" class="breadCrumbs__link">Главная/ </router-link></li>
                    <li class="breadCrumbs__list"><router-link to="/cart" class="breadCrumbs__link breadCrumbs__link_current">Корзина/ </router-link></li>
                    
                </ul>
            </div>
        </section>
    
        <table class="cart-table center">
            <tr>
                <th class="cart-table__head">Product Details</th>											   
                <th class="cart-table__head">unite Price</th>			
                <th class="cart-table__head">Quantity</th>			
                <th class="cart-table__head">shipping</th>			
                <th class="cart-table__head">Subtotal</th>		    
                <th class="cart-table__head">ACTION</th>
            </tr>
            <tr v-for="item in cartItems" :key="item.id_product">
                <td class="cart-table__data">
                    <div class="cart-products">
                        <img :src="item.img" alt="cart_product_1" class="cart-products__img">
                        <div class="cart-products__content">
                            <a href="#" class="cart-products__name">{{ item.product_name }}</a>
                            <div class="cart-products__preferance"><span class="preferance">Color:</span><span class="value"></span>Red</div>
                            <div class="cart-products__preferance"><span class="preferance">Size:</span><span class="value"></span>XXL</div>
                        </div>
                    </div>
                </td>
                <td class="cart-table__data">{{ item.price }}</td>
                <td class="cart-table__data"><input v-model="item.quantity" @change="change(item)" class="count" type="text" value="2"></td>
                <td class="cart-table__data">FREE</td>
                <td class="cart-table__data"> {{ subtotal(item) }} </td>
                <td class="cart-table__data"><a class="cart-remove" @click="cartAPI.remove(item)"><i class="fa fa-times-circle" ></i></a></td>
            </tr>
            
        </table>
        <div class="cart-navigation center">
            <div class="button">CLEAR SHOPPING CART</div>
            <a href="#" class="button">CONTINUE SHOPPING</a>
        </div>
        <section class="buy center">
            <form action="#" class="buy__form">
                <legend class="buy__title">shipping adress</legend>
                <input class="buy__input" type="text" placeholder="Country">
                <input class="buy__input" type="text" placeholder="States">
                <input class="buy__input" type="text" placeholder="Postcode/Zip">
                <input class="buy__button" type="submit" value="get a quote">
            </form>
            <form action="#" class="buy__form">
                <legend class="buy__title">coupon-discount</legend>
                <label for="number" class="buy__label">Enter your coupon code if you have one</label>
                <input class="buy__input" type="text" id="number" placeholder="Coupone code">
                <input class="buy__button" type="submit" value="Apply coupon">
            </form>
            <div class="buy__form">
                <form action="#" class="buy__form_three">
                    <label class="buy__label">SUB TOTAL<span class="buy__label_price">$900</span></label>
                    <legend class="buy__title">GRAND TOTAL<span class="buy__title_red">$900</span></legend>
                    <p class="buy__line"></p>
                    <input class="buy__button buy__button_red" type="submit" value="proceed to checkout">
                </form>
            </div>
            
        </section>
        <section class="subscribe">
            <div class="subscribe__bg">
                <div class="subscribe__content center">
                    <div class="subscribe__slider"> <img src="img/photo.png" alt="" class="slider__photo">
                        <div class="slider__text">
                            <p class="text__message">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                            <p class="text__name">Bin Burhan</p>
                            <p class="text__city">Dhaka, Bd</p>
                            <div class="slider__poiter">
                                <div class="pointer__item"></div>
                                <div class="pointer__item pointer__item__active"></div>
                                <div class="pointer__item"></div>
                            </div>
                        </div>
                    </div>
                    <form action="#" class="subscribe__form">
                        <h3 class="form__title">Subscribe </h3>
                        <p class="form__text">FOR OUR NEWLETTER AND PROMOTION</p>
                        <input type="email" class="form__field" placeholder="Enter Your Email" required>
                        <input type="submit" class="form__button" value="Subscribe"> </form>
                </div>
            </div>
        </section>
        </div>
    `
}

export default cartPage;