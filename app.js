const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            name:'',
            confirmedname: ''
                };
    },
    methods: {
        confirmedinput(){
            this.confirmedname = this.name;
        },
        submitform(event){
            
            alert('submitted');
                },
        setname(event, lastname){
            this.name = event.target.value+' '+lastname;
        },
        add(num){
            this.counter = this.counter + num;
        },
        subtract(num){
            this.counter = this.counter - num;
        }
    }
});
app.mount('#events');