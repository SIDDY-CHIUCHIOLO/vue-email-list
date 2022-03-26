
const root =new Vue({
    el: "#root",
    data: {
        listaEmail : [],
    },
    methods:{
    },
    mounted(){
        const self = this;
        
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(answer){
                self.listaEmail.push(answer.data.response);
            })
        }
    }
})