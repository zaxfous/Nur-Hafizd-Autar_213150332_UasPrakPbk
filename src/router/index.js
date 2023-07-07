import { createRouter, createWebHistory } from 'vue-router';

import Cuaca from '../components/mycuaca.vue';
import Game from '../components/mygame.vue';
import Foto from '../components/myfoto.vue';
import Stopwatch from '../components/mystopwatch.vue';

const routes = [
  { path: '/', component: Stopwatch},
  { path: '/Mycuaca', component: Cuaca },
  { path: '/Myfoto', component: Foto },
  { path: '/Mygame', component: Game},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;