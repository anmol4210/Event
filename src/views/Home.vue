<template>
  <div class="eventList row">
  
  
    <div class="col-md-3" v-for="event in events" :key=event.id>
  <EventCard v-bind:event="event" />
     <!-- {{ event.name }}
      -->
    </div>
  
  </div>
   
</template>
<script>

import EventCard from '@/components/EventCard.vue'

let event=require('../data.js').events
console.log(event);
export default {
  name: 'eventList',
  components: {
    EventCard
  },
  data: function(){
    return  {events: event}
  }
}
</script>