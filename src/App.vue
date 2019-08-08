<template lang="html">
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/beers">Beers</router-link>
      <router-link to="/favourites">Favourites</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
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
