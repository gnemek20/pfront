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
        <button @click="purchase">결제하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    purchase() {
      const imp = window.IMP;
      imp.init('iamport');
      imp.request_pay({
        pg: 'html5_inicis.',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: '상품명',
        amount: 1,
        buyer_email: 'test@portone.io',
        buyer_name: '후드닭',
        buyer_tel: '010-1234-5678',
        buyer_addr: '서울특별시 강남구 삼성동',
        buyer_postcode: '123-456',
        m_redirect_url: 'http://pfront.kro.kr/shop/product?num=1'
      }, (result) => {
        if (result.success) {
          console.log('good');
        }
        else {
          console.log('oh my god');
        }
      });
    }
  }
}
</script>

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
.option > button:hover {
  background-color: #e0e0e0;
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