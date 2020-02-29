let string = "Nowadays American habits have changed much. Americans buy smaller cars and walk more. More and more of them are cooking 'from scratch', instead of using frozen or half-prepared foods. Italian fashion, French wines. German cars, and Dutch cheese are selling well in the U.S. Overall, trends in lifestyles have moved and still move across the Atlantic from Europe.As a result a typical European may say: 'what they are doing in California today, we'll probably be trying to do in Europe tomorrow'."
        
let string1 = string.replace(/'/g, `<span class="one">"</span>`)
        

       
let string2 = string.replace(/((?<=\s)')|('(?=\W))/g,`<span class="one">"</span>`);
       
document.querySelector('.string1').insertAdjacentHTML('beforeend', string1);
document.querySelector('.string2').insertAdjacentHTML('beforeend', string2);


// Форма

class Form{
    constructor(){
        this.elements = {};
        document.querySelectorAll(`[name]`).forEach(val => {
            this.elements[val.name] = val.value;
        });
        this.regular = {
            name: /^[a-z\s]+$/gi,
            tel: /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
            email: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        }
        this._validator();

    }
    
   
    
    _validator(){
        for(let key in this.elements){
            if(this.regular[key] == undefined) break;
            if(this.regular[key].test(this.elements[key])){
                this._addClass(true, key);
                
            }else{
               this._addClass(false, key);
            }
        }
            
        
    }
    
    _addClass(status, key){
        if(status) {
            document.querySelector(`[name="${key}"]`).classList.add('succed');
            document.querySelector(`[name="${key}"]`).classList.remove('warning');
            document.querySelector(`.infblock_${key}`).classList.remove('alarm');
        }else{
            document.querySelector(`[name="${key}"]`).classList.add('warning');
            document.querySelector(`[name="${key}"]`).classList.remove('succed');
            document.querySelector(`.infblock_${key}`).classList.add('alarm');
        }
    }
}


document.querySelector('[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    const form = new Form();
    
    
    
})