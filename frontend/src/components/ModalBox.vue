<template>
  <div class="modalbox">
    <div id="myModal" class="modal">
    <!-- Modal content -->
        <div v-if="item" class="modal-content">
            <div class="modal-header">
            <span @click="this.toggleModal" class="close">&times;</span>
            <h2>{{ item.name }}</h2>
            </div>
            <div class="modal-body">  
                Naam: <input type="text" name="name" v-model="item.name"><br>
                Smaak: <input type="text" name="flavor" v-model="item.flavor"><br>
                Kleur: <input type="text" name="color" v-model="item.color"><br>
                Prijs: € <input type="text" name="price" v-model="item.price"><br>
                <button @click="putNewData(item)">Opslaan</button> <br><br>
                <button @click="deleteData(item)">Delete drankje</button>
            </div>
            <div class="modal-footer">
            <h3>Verander het drankje</h3>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ModalBox',
    methods: {
        toggleModal() {
            this.$store.commit('setShowModal')
        },
        putNewData(item) {
          this.$store.commit('putApiData', item)
        },
        deleteData(item) { 
            this.$store.commit('deleteApiData', item)
        }
    },
    props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
li{
  list-style: none;
}
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s
}

/* Modal Content */
.modal-content {
  position: fixed;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #04595c;
  color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
  padding: 2px 16px;
  background-color: #118392;
  color: white;
}

/* Add Animation */
@-webkit-keyframes slideIn {
  from {bottom: -300px; opacity: 0} 
  to {bottom: 0; opacity: 1}
}

@keyframes slideIn {
  from {bottom: -300px; opacity: 0}
  to {bottom: 0; opacity: 1}
}

@-webkit-keyframes fadeIn {
  from {opacity: 0} 
  to {opacity: 1}
}

@keyframes fadeIn {
  from {opacity: 0} 
  to {opacity: 1}
}
</style>