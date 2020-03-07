Vue.component('search', {
    
    
    template:`
        <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter()">
            <input type="text" v-model="$root.userSearch">
            <button type="submit">Search</button>
        </form>
    `,
})
