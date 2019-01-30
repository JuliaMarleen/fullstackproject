<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <drink-list :items="this.items" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import DrinkList from '@/components/DrinkList.vue'

export default {
  name: 'home',
  // data() {
  //   return {
  //     items: [
  //       {
  //         name: "Fanta",
  //         color: "Yellow",
  //         price: "3"
  //       }, 
  //               {
  //         name: "Cola",
  //         color: "Brown",
  //         price: "2"
  //       }, 
  //               {
  //         name: "Fristi",
  //         color: "Pink",
  //         price: "5"
  //       }
  //       ]
  //   }
  // },
  components: {
    DrinkList,
  }
}
</script>
