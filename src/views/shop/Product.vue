<template>
  <div class="container">
    <div class="header">

    </div>
    <div class="block">
      <div class="product">
      </div>
      <div class="option">
        <h1>NIHIL</h1>
        <p>설명</p>
        <button>결제하기</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.container > .header {

}

.container > .block {
  display: grid;
  grid-template-columns: repeat(2, 40vw);
  grid-template-rows: 70vh;
  gap: 40px;
  max-width: 1600px;
}
.block > .product {
  display: flex;
  border: 1px solid dimgray;
}

.option > button {
  cursor: pointer;
  border: 1px solid dimgray;
  border-radius: 3px;
}

@media screen and (max-width: 700px) {
  .container {
    display: block;
    height: fill-available;
  }

  .container > .block {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
  .block > .product {
    height: 40vh;
    border: 0;
    border-bottom: 1px solid dimgray;
  }
  .block > .option {
    padding: 0px 10px;
  }
}
</style>