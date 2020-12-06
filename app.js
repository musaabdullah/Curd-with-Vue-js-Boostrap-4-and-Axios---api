var vm = new Vue({
    el:"#app",
    data:{
        users:[],
        leading:false,
        id:0,
        search:false,
        people:true,
        person:'',

    },
    mounted: function(){
        this.leading=true;
        axios.get('https://reqres.in/api/users')
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
        axios.get('https://reqres.in/api/users')
        .then( res => {
            const data = res.data;
            this.users = data.data;
            this.leading=false;
        })
        .catch(error =>{
            console.log(error);
        })   
       },
       deletePeople(id,index){
           axios.delete(`https://reqres.in/api/users/${id}`)
           .then(res => {
               console.log(res.data);
               this.users.splice(index,1);
           })
           .catch(error =>{
               console.log(error);
           })
       },
       searchPeople(id){
           this.leading=true;
           this.search=true;
           this.people=false;
           axios.get(`https://reqres.in/api/users/${id}`)
           .then( res =>{
               const data = res.data;
               this.person = data.data;
               this.leading=false;
           })
           .catch(error =>{
               console.log(error);
           })
       } 
    } 
})