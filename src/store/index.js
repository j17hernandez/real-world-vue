import EventService from '@/services/EventService';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'abcd1234', name: 'Jorge Hernández' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
    events: [],
    eventsTotal: 0,
    event: {},
  },
  getters: {
    getEventById(state, id) {
      return state.events.filter((event) => event.id === id);
    },
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((resp) => {
          const TOTAL_COUNT = resp.headers['x-total-count'];
          commit('SET_EVENTS_TOTAL', TOTAL_COUNT);
          commit('SET_EVENTS', resp.data);
        })
        .catch((error) => {
          console.log('There was an error:', error.response);
        });
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id);
      if (event) {
        commit('SET_EVENT', event);
      } else {
        EventService.getEvent(id)
          .then((resp) => {
            commit('SET_EVENT', resp.data);
          })
          .catch((error) => {
            console.log('There was an error:', error.response);
          });
      }
    },
  },
  modules: {},
});
