<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';
export default {
  name: 'EventListPage',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    EventService.getEvents()
      .then((resp) => {
        this.events = resp.data;
      })
      .catch((error) => {
        console.log('There was an error:', error.response);
      });
  },
};
</script>
