<template>
  <div class="container">
    <div class="block">
      <div class="product">
      </div>
      <div class="option">
        <div class="text-area">
          <div class="name">
            <h1>상품명</h1>
          </div>
          <div class="introduce">
            <p>가격</p>
            <p>배송비</p>
            <p>수량</p>
          </div>
        </div>
        <div class="choice-status">
          <div class="buttons">
            <button @click="purchase">구매하기</button>
            <button>장바구니</button>
            <button>찜</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product_num: this.$route.query['num'],
      imp_status: this.$route.query['imp_success']
    }
  },
  created() {
    if (this.imp_status === 'true') {
      this.$push('/shop/complete');
    }
  },
  methods: {
    purchase() {
      const imp = window.IMP;
      imp.init('imp42823705');
      imp.request_pay({
        pg: 'html5_inicis.INIpayTest',
        pay_method: 'card',
        name: '상품명',
        amount: 1,
        buyer_email: 'test@portone.io',
        buyer_name: '후드닭',
        buyer_tel: '010-1234-5678',
        buyer_addr: '서울특별시 강남구 삼성동',
        buyer_postcode: '123-456',
        m_redirect_url: `http://pfront.kro.kr/shop/product?num=${this.product_num}`
      }, (rsp) => {
        if (rsp.success) {
          this.$push('/shop/complete');
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
.block > .option {
  display: flex;
  flex-direction: column;
}


.option > .text-area {
  display: flex;
  flex-direction: column;
}
.text-area > .introduce {
  margin-left: 5px;
}

.option > .choice-status {
  margin-top: auto;
  display: flex;
}
.choice-status > .buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.buttons > button {
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid dimgray;
  border-radius: 3px;
}
.buttons > button:hover {
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
    padding: 0px 10px 80px;
  }
  .option > .choice-status {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
  .choice-status > .buttons {
    padding: 0px 10px 10px;
  }
  .buttons > button {
    padding: 20px 35px;
  }
}
</style>