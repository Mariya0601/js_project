const app = new Vue({
    el: '#app',
    data:{
        name:'Олег',
        name2:'Мария'
    },
    methods:{
        test(x){
            alert(`Имя пользователя - ${this.name}, возраст ${x}`);
        }
    }
});