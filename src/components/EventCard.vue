<template>

<div class="card border-0">
  
  <img class="card-img-top"  src="https://www.hdwallpapersspot.com/wp-content/uploads/2018/01/Background-Images-3.jpeg"  alt="Card image cap">
  
  <div class="card-body">
    <h4 class="card-title text-info">{{ event.name }}</h4>
    <p class="card-text d-flex jsutify-content-between">
      {{event.summary}}
    </p>
    <router-link v-bind:to="'/about/'+event.id">
    <button  class="btn btn-primary">Next</button>
    </router-link>
  </div>
</div>




</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: Object
  }
}
</script>