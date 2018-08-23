new Vue({
    el: '#app',
    data: {
        title: 'Vue Fundamentals development',
        wage: 10
    },
    methods: {
        changeWage(amount){
            this.wage += amount
        }
    }
})