<template lang="html">
  <div id="">
    <main-header title='Beer List' />
    <div>
      <ul>
        <li v-for="(beer, index) in beers" :beer="beer" :key="index" >{{beer.name}}</li>
      </ul>

    </div>
  </div>




</template>

<script>
import MainHeader from '@/components/MainHeader';

export default {
  name: 'beers-list',
  props: ['beers'],
  components: {
    'main-header': MainHeader
  }
}
</script>

<style lang="css" scoped>
</style>
