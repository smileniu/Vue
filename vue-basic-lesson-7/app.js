new Vue({
    el: '#vue-app',
    data: {
        name:"hello",
        age:""
    },
    methods: {
        logName: function(){
            // console.log("you entered your name");
            // console.log(this.$refs.na.value);
            this.name=this.$refs.name.value;
            
        },
        logAge: function(){
            // console.log('you entered your age');
            this.age=this.$refs.age.value;
        }
    }
});
