new Vue({
    el: '#app',
    data: {
        title: 'Vue Fundamentals development',
        name: 'Derek Branning',
        url: 'https://www.youtube.com/watch?v=68BjP5f0ccE',
        classes: [
            'one', 'two'
        ]
    },
    methods: {
        greet(time){
            return `Hello and good ${time}, ${this.name}`
        }
    }
})