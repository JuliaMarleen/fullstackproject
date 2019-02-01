<template>
  <div @click="toggleModalCreate()" class="buttondrink">
      <p>Drankje erbij</p>
  </div>
</template>

<script>
export default {
  name: 'ButtonAddDrink',
  methods: {
    toggleModalCreate() { 
      this.$store.commit('setShowModalCreate')
    }
  },
  props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.buttondrink{
    width: 70px;
    height: 40px;
    background-color: red;
}
</style>
