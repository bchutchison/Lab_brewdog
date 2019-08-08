<template lang="html">
  <div id="">
    <div>
      <ul>
        <li v-for="(beer, index) in beers" :beer="beer" :key="index" >{{beer.name}}</li>

      </ul>
    </div>
  </div>


</template>

<script>


export default {
  name: 'beers-list',
  props: ['beers']

  }
</script>

<style lang="css" scoped>
</style>
