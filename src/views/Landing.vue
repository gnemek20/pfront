<template>
  <div class="container">
    <div class="block" @click="$push('/home')">
      <h1>:P</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.container > .block {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid dimgray;
  border-radius: 5px;
}

@media (hover:hover) {
  .container > .block:hover {
    box-shadow: 0px 0px 5px 0px dimgray;
  }
}

@media screen and (max-width: 700px) {
  .container {
    height: fill-available;
  }
}
</style>