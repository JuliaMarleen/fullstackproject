<template>
  <div class="drinklist">
    <h1>drinks</h1>
    <ul>
      <drink-item :key="index" v-for="(item, index) in items" :item="item"></drink-item>
    </ul>
  </div>
</template>

<script>
import DrinkItem from '@/components/DrinkItem.vue'
import axios from 'axios'

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
    axios
      .get('http://145.24.222.58:8000/api/drinks')
      .then(response => (this.items = response.data.items))
  },
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
