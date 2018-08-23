new Vue({
    el: '#app',
    data: {
        title: 'Vue Fundamentals development',
        name: 'Derek Branning'
    },
    methods: {
        updateName(event){
            // console.log(event.target.value)
            this.name = event.target.value
        }
    }
})