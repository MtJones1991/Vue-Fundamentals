new Vue({
    el: '#app',
    data: {
        title: 'Type in the input field to see v-model two way binding!s',
        showName: true,
        showAge: true
    },
    methods: {
        toggleName(){
            this.showName = !this.showName
        },

        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})