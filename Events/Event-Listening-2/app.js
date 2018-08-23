new Vue({
    el: '#app',
    data: {
        title: 'Vue Fundamentals development',
        wage: 10,
        coords: {
            x: 0,
            y: 0
        }
    },
    methods: {
        logEvent(event){
            console.log(event)
        },

        logCoords(event){
            this.coords.x = event.offsetX
            this.coords.y = event.offsetY
        }
    }
})