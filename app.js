Vue.createApp({
    data(){
        return{
            name: 'giorgi makasarashvili',
            age: 20,
            img: 'https://cdn.pixabay.com/photo/2017/02/01/00/32/butterfly-2028591__480.png'
        }
    },
    methods: {
        rand(){
            return Math.random();
        }
    }
}).mount("#assignment");