import products from '../js/ProducComp'

const home = {
    
    components: {
        products,
    },
    template:`
        <div>
        
    <nav class="center">
        
        <ul class="menu__ul">
            <li class="menu__list menu__list_active"><a href="#" class="menu__link">Home</a></li>
            <li class="menu__list">
               <a href="products.html" class="menu__link">Man</a>
               <div class="drop__box">
                   <div class="drop__box__item">
                       <h3 class="drop__item__title">Women</h3>
                       <ul class="drop__menu">
                           <li class="drop__list"><a href="#" class="drop__link">Dresses</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Tops</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Jackets/Coats</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Blazers</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Denim</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Leggings/Pants</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Skirts/Shorts</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Accessories </a></li>
                          
                       </ul>
                   </div>
                   <div class="drop__box__item">
                       <h3 class="drop__item__title">Women</h3>
                       <ul class="drop__menu">
                           <li class="drop__list"><a href="#" class="drop__link">Dresses</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Tops</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Jackets/Coats</a></li>
                       </ul>
                       <h3 class="drop__item__title">Women</h3>
                       <ul class="drop__menu">
                           <li class="drop__list"><a href="#" class="drop__link">Dresses</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Tops</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                       </ul>
                   </div>
                   <div class="drop__box__item">
                       <h3 class="drop__item__title">Women</h3>
                       <ul class="drop__menu">
                           <li class="drop__list"><a href="#" class="drop__link">Dresses</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Tops</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                           <li class="drop__list"><a href="#" class="drop__link">Jackets/Coats</a></li>
                       </ul>
                       <img src="/img/super_sale.jpg" alt="" class="drop__img">
                   </div>
               </div>    
            </li>
            <li class="menu__list"><a href="checkout.html" class="menu__link">Women</a></li>
            <li class="menu__list"><a href="#" class="menu__link">Kids</a></li>
            <li class="menu__list"><a href="#" class="menu__link">Accoseriese</a></li>
            <li class="menu__list"><a href="#" class="menu__link">Featured</a></li>
            <li class="menu__list"><a href="#" class="menu__link">Hot Deals</a></li>
        </ul>
    </nav>    
    <div class="promo">
      <div class="peomo__wrapper center">
        <div class="promo_content">
            <div class="promo__text">
                <p class=" promo__brand">THE BRAND</p>
                <p class="promo__luxerio">OF LUXERIOUS <span class="fashion">FASHION</span></p>
            </div>
           
       </div>
      </div>
       
        
    </div>
    
    <div class="category center">
        <div class="category__left">
            <a class="category__item" href="#">
               <img src="/img/Category__1.jpg" alt="category__1">
               <div class="category__text">
                    <span class="category__promo">hOT dEAL</span><br>
                    <span class="category__title">FOR MEN</span>
                </div>    
            </a>
            <a class="category__item" href="#">
               <img src="/img/Category__2.jpg" alt="category__1">
               <div class="category__text">
                    <span class="category__promo">LUXIROUS & trendy</span><br>
                    <span class="category__title">ACCESORIES</span>
                </div>    
            </a>
            
        </div>
        <div class="category__right">
            <a class="category__item" href="#">
               <img src="/img/Category__3.jpg" alt="category__1">
               <div class="category__text">
                    <span class="category__promo">30% offer</span><br>
                    <span class="category__title">women</span>
                </div>    
            </a>
            
            <a class="category__item" href="#">
               <img src="/img/Category__4.jpg" alt="category__1">
               <div class="category__text">
                    <span class="category__promo">new arrivals</span><br>
                    <span class="category__title">FOR kids</span>
                </div>    
            </a>
            
        </div>    
            
                    
       
        <div class="category__2"></div>
        <div class="category__3"></div>
        <div class="category__4"></div>
       
            
    </div>
   
    <section class="featured center">
        <h3 class="featured_title">Fetured Items</h3>
        <p class="featured_text">Shop for items based on what we featured in this week</p>

        <products ref="products"></products>

    </section>
    
    <div class="button__wrepper center">
        <a href="#" class="product__button">Browse All Product</a>
    </div>
    
    <section class="feature center">
        <div class="feature__banner">
           
            <div class="banner__text">
                <p class="text__line1">30% <span class="text__red">OFFER</span></p>
                <p class="text__line2">FOR WOMEN </p>
            </div>
        </div>
        <div class="feature__box">
            <div class="feature__box__item">
                <img src="/img/car.png" alt="car" class="item__img">
                <div class="item__text">
                    <h3 class="text__title">Free Delivery</h3>
                    <p class="text__content">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
             <div class="feature__box__item">
                <img src="/img/percent.png" alt="percent" class="item__img">
                <div class="item__text">
                    <h3 class="text__title">Sales & discounts</h3>
                    <p class="text__content">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
             <div class="feature__box__item">
                <img src="/img/king.png" alt="king" class="item__img">
                <div class="item__text">
                    <h3 class="text__title">Quality assurance</h3>
                    <p class="text__content">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
        </div>
        
        
    </section>
    
    <section class="subscribe">
      
       <div class="subscribe__bg">
          <div class="subscribe__content center">
            <div class="subscribe__slider">
                <img src="/img/photo.png" alt="" class="slider__photo">
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
                <input type="submit" class="form__button" value="Subscribe">
            </form>
          </div>
           
       </div>
        
    </section>
        
    
    </div>
    `,
    
}
export default home;