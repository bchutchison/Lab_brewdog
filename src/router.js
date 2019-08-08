import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Beers from './views/Beers.vue';
import Favourites from './views/Favourites.vue';

Vue.use(Router);
const router =new Router({
routes: [
  {
    path: '',
    home: 'home',
    components: Home
  },
  {
    path: '/beers',
    home: 'beers',
    components: Beers
  },
  {
    path: '/favourites',
    home: 'favourites',
    components: Favourites
  }
]

});

export default router;
