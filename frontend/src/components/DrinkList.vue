<template>
  <div class="drinklist">
    <h1>Wat voor drinken wil je?</h1>
    <ul>
      <drink-item :key="index" v-for="(item, index) in items" :item="item"></drink-item>
    </ul>
  </div>
</template>

<script>
import DrinkItem from '@/components/DrinkItem.vue'

export default {
  name: 'DrinkList',
  components: {
    'drink-item': DrinkItem
  },
    data () {
    return {
      info: null
    }
  },
    mounted () {
    
  },
  //   post () {
  //   axios
  //     .post('http://145.24.222.58:8000/api/drinks')
  //     .then(response => (this.items = response.data.items))
  // },
  props: ['items']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
