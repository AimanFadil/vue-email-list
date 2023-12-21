const { createApp } = Vue;

createApp({
    data() {
        return {
            mail: []
        }
    },
    methods: {
        getRandomMail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((posta) => {
                    this.mail.push(posta.data.response)
                })
            }
        }
    }
}).mount('#app')
