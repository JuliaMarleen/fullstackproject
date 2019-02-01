<template>
  <div class="home">
     <button-add-drink/>
     <drink-list :items="this.data"/>
     <modal-box v-if="this.showModal" :item="this.itemData"/>
     <modal-box-create v-if="this.showModalCreate"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import DrinkList from '@/components/DrinkList.vue'
import ModalBox from '@/components/ModalBox.vue'
import ButtonAddDrink from '@/components/ButtonAddDrink.vue'
import ModalBoxCreate from '@/components/ModalBoxCreate.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: mapState([
    'data',
    'showModal',
    'currentItemId',
    'itemData',
    'showModalCreate'
  ]), 
  components: {
    DrinkList,
    ModalBox,
    ModalBoxCreate,
    ButtonAddDrink
  },
}
</script>

<style>
body{
  background-color: aqua;
}
</style>