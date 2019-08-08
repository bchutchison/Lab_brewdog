<template lang="html">
  <div id="">
    <main-header title='Beers' />
    <div class="main-container">
      <beers-list :beers='beers'></beers-list>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import BeersList from '@/components/BeersList';

export default {
  name: 'home',
  props: ["beers"],
  components: {
    'main-header': MainHeader,
    'beers-list': BeersList
  }
}
</script>

<style lang="css" scoped>
</style>
