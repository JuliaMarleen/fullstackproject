<template>
  <div class="drinkitem">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <li>{{ item.name }}</li>
              </div>
              <div class="flip-box-back">
                <li>{{ item.name }}</li><br>
                <li>{{ item.flavor }}</li><br>
                <li>{{ item.color }}</li><br>
                <li>€{{ item.price }}</li>
              </div>
            </div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'DrinkItem',
  props: ['item']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
li {
  display: inline-block;
}

/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-box {
  background-color: transparent;
  margin-left: 40%;
  margin-bottom: 50px;
  width: 20%;
  height: 100px;
  //border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  box-sizing: border-box;
}

/* This container is needed to position the front and back side */
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  backface-visibility: hidden;
}

/* Style the front side */
.flip-box-front {
  background-color: aqua;
  // border-bottom-color: black;
  // border-style: solid;
  // border-width: 3px;
}

/* Style the back side */
.flip-box-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
