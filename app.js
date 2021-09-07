new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        wage: 10,
        name: 'Tong Wei',
        coords: {
            x: 0,
            y: 0
        }
    },
    methods: {
        changeWage(amount) {
            this.wage += amount
        },
        logEvent(e) {
            console.log(e)
        },
        logCoords(e) {
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        updateName(e) {
            // console.log(e.target.value)
            this.name = e.target.value
        },
        logMessage() {
            console.log('hello world')
        }
    }
})