var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString(),
    hours: 0,
    minutes: 0,
    seconds: 0,
    time: '',
  },
  methods: {
    gettime(){
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();
        this.time = `${this.hours}:${this.minutes}:${this.seconds}`;
        setTimeout(this.gettime, 1000);
    }
}
    
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li class="list">{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Овощи' },
      { id: 1, text: 'Сыр' },
      { id: 2, text: 'Что там ещё люди едят?' }
    ]
  }
})
app2.gettime();
console.log(app2.time)