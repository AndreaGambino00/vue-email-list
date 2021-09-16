var app = new Vue({
    el: '#app',
    data: {
     emails: []
    },

    created() {

        const self = this
        // prendo 10 email random da API
        for (i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then ( function  ( response )  {
                self.emails.push(response.data.response);
            })
        }

    }
});