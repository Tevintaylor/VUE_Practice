new Vue({
    el: '#app',
    data: {
        title: 'Becoming a Vue ninja',
        wage: 10,
        name: 'Tong Wei',
        coords: {
            x: 0,
            y: 0
        },
        showName: false,
        showAge: true,
        items: ['Mushtoom', 'Green Shells', 'Red Shells', 'Banana', 'Star'],
        ninjas: [
            { name: 'Crystal', age: 25, belt: 'Black' },
            { name: 'Tevin', age: 30, belt: 'Brown' },
            { name: 'Tom', age: 35, belt: 'Orange' }
        ]
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
        },
        toggleName() {
            this.showName = !this.showName
        },
        toggleAge() {
            this.showAge = !this.showAge
        }
    }
})