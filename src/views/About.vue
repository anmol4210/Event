<template>

<div  class="card">
  
  <div class="card-body">
  <img class="card-img-top col-md-3"
   src="https://www.hdwallpapersspot.com/wp-content/uploads/2018/01/Background-Images-3.jpeg"
    alt="Card image cap">
  
    <h4 class="card-title">{{event.name}}</h4>
    <p class="card-text">
      {{event.summary}}
    </p>
    <div  v-if="!eventoption">
      
        <button  class="btn btn-primary m-3" v-on:click="status('going')">Going</button>
        <button  class="btn btn-primary m-3" v-on:click="status('maybe')">Maybe</button>
        <button  class="btn btn-primary m-3" v-on:click="status('notgoing')">Not interested</button>
    </div>  
  <div class="text-success" v-if="eventoption">Your Preference : {{eventstat}}</div>
<br>
</div>
</div>

</template>
<script defer>



export default({
  props:[
    'id'
  ],
  
   data: function(){
    return  {
     eventoption:false,
      event:null,
      eventstat:this.$store.getters.status(this.$route.params.id).value
    }
  },
  
    created () {
        this.fetchData()
  },
    
  methods: {

status(stats){
 
  var evetstat={
    id:this.$route.params.id,
    stat:stats
  }
  this.$store.commit('storestatus',evetstat)
  this.eventstat=this.$store.getters.status(this.$route.params.id).value
  this.eventoption=true
 
},
    fetchData () {
      this.error = this.post = null
      this.loading = true
     let events=require('../data.js').events
      let fetchedEvent = events.filter(event => {
          return event.id == this.$route.params.id
        })
        this.event=fetchedEvent[0]
let option=this.$store.getters.status(this.$route.params.id).value;
if(option =="no"){
  this.eventoption=false
}
else{
  this.eventoption=true
}
 
    },

  }
});




</script>
