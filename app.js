var vm = new Vue({
    el:"#app",
    data:{
        users:[],
        leading:false,
        id:0,

    },
    mounted: function(){
        this.leading=true;
        axios.get('https://reqres.in/api/users?page=2')
        .then( res => {
            const data = res.data;
            this.users = data.data;
            this.leading=false;

        })
        .catch(error =>{
            console.log(error);
        })

    },
    methods:{
       displayPeople(){
        this.leading=true;
        axios.get('https://reqres.in/api/users?page=2')
        .then( res => {
            const data = res.data;
            this.users = data.data;
            this.leading=false;
        })
        .catch(error =>{
            console.log(error);
        })   
       },
       deletePeople(id){
           axios.delete(`https://reqres.in/api/users/${id}`)
           .then(res => {
               console.log(res.data);
               this.displayPeople();
           })
           .catch(error =>{
               console.log(error);
           })
       },
       searchPeople(id){
           this.leading=true;
           axios.get(`https://reqres.in/api/users/${id}`)
           .then( res =>{
               const data = res.data;
               this.users = data.data;
               this.leading=false;
           })
           .catch(error =>{
               console.log(error);
           })
       }

         
    }
})