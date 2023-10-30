<template>
  <div class="container">
    <div class="header">
      <div class="option">
        <div class="sign" @click="$push('/signin')">
          <h5>LOGIN</h5>
        </div>
        <div class="wish" @click="$push('/shop/cart')">
          <h5>CART</h5>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="hamburger">
        <div class="icon">
        </div>
      </div>
      <div class="logo">
        <div class="block" @click="$push('/home')">
          <h1>NIHIL</h1>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="list">
        <div class="block" v-for="index in 10" v-bind:key="index" @click="$query('/shop/product', {num: index})">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container > .top {
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 1600px;
}
.top > .hamburger {
  display: flex;
}
.top > .icon {
  display: flex;
}
.icon > img {
  object-fit: none;
}
.top > .logo {
  display: flex;
  justify-content: center;
}
.logo > .block {
  cursor: pointer;
  display: flex;
}

.container > .products {
  margin: 20px 0px;
  width: 100%;
  max-width: 1600px;
}
.products > .list {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 30%));
  grid-auto-rows: minmax(350px, 35vw);
  gap: 10px;
}
.list > .block {
  cursor: pointer;
  border: 1px solid dimgray;
}

.container > .header {
  width: 100%;
  max-width: 1600px;
  display: flex;
}
.header > .option {
  margin-left: auto;
  display: flex;
  padding: 0px 10px;
}
.option > div {
  cursor: pointer;
  padding: 3px;
}
.option > div:nth-child(1) {
  margin-right: 5px;
}
.option > div:nth-child(2) {
  margin-left: 5px;
}

@media (hover:hover) {
  .list > .block:hover {
    box-shadow: 0px 0px 5px 0px dimgray;
  }
  
  .option > div:hover {
    color: #e0e0e0;
  }
}
</style>