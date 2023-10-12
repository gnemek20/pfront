<template>
  <div class="container">
    <div class="block">
      <div class="area">
        <div class="logo">
          <h1>NIHIL</h1>
        </div>
        <div class="sign">
          <div class="id">
            <input type="text">
          </div>
          <div class="pwd">
            <input type="password">
          </div>
          <button>로그인</button>
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
  width: 100vw;
  height: 100vh;
}

.container > .block {
  margin-top: 100px;
  width: 300px;
  border: 1px solid dimgray;
  border-radius: 3px;
}

.block > .area {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.area > .logo {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.area > .sign {
  display: flex;
  flex-direction: column;
}
.sign > div {
  display: flex;
  border: 1px solid dimgray;
  border-radius: 5px;
}
.sign > div:nth-child(1) {
  border-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.sign > div:nth-child(2) {
  margin-bottom: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
input {
  outline: none;
  width: 100%;
  height: 100%;
  padding: 14px;
  border: 0;
  border-radius: 5px;
  font-size: 15px;
}
button {
  cursor: pointer;
  margin-top: 10px;
  height: 50px;
  border: 1px solid dimgray;
  border-radius: 3px;
  font-size: 20px;
  font-weight: 700;
}
button:hover {
  background-color: #e0e0e0;
}

@media screen and (max-width: 700px) {
  .container {
    height: fill-available;
  }
}
</style>