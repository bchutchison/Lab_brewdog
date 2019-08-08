<template lang="html">
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/beerslist">Beers List</router-link>
      <router-link to="/favourites">Favourites</router-link>
    </nav>
    <router-view />
    <div class="main-container">
      <beers-list :beers='beers'></beers-list>
    </div>
  </div>
</template>

<script>
import BeersList from './views/BeersList.vue'

export default {
  name: 'app',
  data() {
    return {
      beers: []
    }
  },
  mounted() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beers => this.beers = beers)
  },
  components: {
    "beers-list": BeersList
  }
}



</script>

<style lang="css" scoped>
nav {
display: flex;
justify-content: center;
width: 50vw;
margin: 0 auto;
padding: 20px;
}

a {
  margin: 0 20px;
  text-decoration: none;
  background-color: grey;
  padding: 10px;
}

</style>
