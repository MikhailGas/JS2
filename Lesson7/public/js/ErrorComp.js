Vue.component('error', {
    props:['err'],
    data(){
        return {
            isError: false,
            message: '',
        }
        
    },
    methods: {
        errorConnection(err){
            this.message = err;
            this.isError = true;
        },
    },
    template: `
        <div class="error" v-show="isError">{{ message }}</div>
    `
    
    
})