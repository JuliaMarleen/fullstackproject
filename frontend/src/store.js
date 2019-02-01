import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    showModal: false,
    showModalCreate:false,
    currentItemId: 0,
    itemData: null
  },
  mutations: {
    fetchApiData(state) {
      axios
      .get('http://145.24.222.58:8000/api/drinks')
      .then(response => (state.data = response.data.items))
    },
    setShowModal(state, itemId) {
      if(itemId !== undefined) {
        axios
        .get('http://145.24.222.58:8000/api/drinks/' + itemId)
        .then(response => (state.itemData = response.data))
      }
      state.showModal = !state.showModal
    },
    setShowModalCreate(state) {
      state.showModalCreate = !state.showModalCreate
    },
    putApiData(data){
      const {itemData} = data
      axios
      .put('http://145.24.222.58:8000/api/drinks/' + itemData._id, itemData).then(
        response => (location.reload())
      )
    },
    deleteApiData(state){
      const {itemData} = state  
      axios
      .delete('http://145.24.222.58:8000/api/drinks/' + itemData._id).then(
        response => (location.reload())
      )
    },
    createApiData(state, item){
      axios
      .post('http://145.24.222.58:8000/api/drinks/', item)
    }
  },
  actions: {

  }
})
