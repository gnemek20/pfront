<template>
  <div class="container">
    <div class="block">
      <h1>결제가 완료되었습니다.</h1>
      <div class="area">
        <button @click="$push('/shop/cart')">돌아가기</button>
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
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
.block > .area {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.area > button {
  cursor: pointer;
  border: 1px solid dimgray;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 700;
}
.area > button:hover {
  background-color: #e0e0e0;
}
</style>