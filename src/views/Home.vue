<template>
  <div class="container">
    <div class="header">
      <div class="block">
        <h3>CONTACT</h3>
      </div>
      <div class="block">
        <h3>GALLERY</h3>
      </div>
      <div class="block">
        <h3>EPISODE</h3>
      </div>
      <div class="block" @click="$push('/shop')">
        <h3>SHOP</h3>
      </div>
    </div>
    <div class="block">
      <h1>:3</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.container > .block {
  border: 1px solid dimgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  animation: rotate 5s linear infinite;
}

.container > .header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(4, auto);
  width: 100%;
  max-width: 1600px;
}
.header > .block {
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
}
.header > .block:hover {
  background-color: #e0e0e0;
}
</style>