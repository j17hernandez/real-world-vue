import Vue from 'vue';
import VueRouter from 'vue-router';
import EventCreatePage from '../views/EventCreate.vue';
import EventShowPage from '../views/EventShow.vue';
import EventListPage from '../views/EventList.vue';
import UserPage from '../views/User.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListPage,
  },
  {
    path: '/event',
    name: 'event-show',
    component: EventShowPage,
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreatePage,
  },
  {
    path: '/user/:username',
    name: 'user',
    component: UserPage,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
