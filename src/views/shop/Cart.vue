<template>
  <div class="container">
    <div class="block">
      <h2>CART</h2>
      <div class="list">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}

.container > .block {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}
.block > .list {
  display: grid;
  border: 1px solid dimgray;
  border-radius: 5px;
  margin-top: 100px;
}

@media screen and (max-width: 700px) {
  .container {
    height: fill-available;
  }
}
</style>