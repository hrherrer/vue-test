<template>
  <div class="coins">
      <h1>Currency information</h1>

      <div v-if="loading" class="loading">
        <h2>Loading</h2>
        <circle-5/>
      </div>

      <div v-else>
          <p>Name: {{ coin.name }}</p>
          <p>Symbol: {{ coin.symbol }}</p>
          <p>Price (USD): {{ coin.price_usd }}</p>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Circle5 } from 'vue-loading-spinner'

export default {
  name: 'Coins',
  components: {
    Circle5
  },
  data: function () {
    return {
      loading: true,
      error: false
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_CURRENCIES_LIST').then(() => {
      this.loading = false
    })
  },
  computed: {
    coin: function () {
      for (let currency of this.currencies) {
        if (currency.id === this.$route.params.id) { return currency }
      }
      return { name: '', symbol: '', price_usd: '' }
    },
    ...mapState([
      'currencies'
    ])
  }
}
</script>


<style lang="less" scoped>
    h1, h2 {
      font-weight: normal;
    }
    .loading {
      text-align: center;
      h2 {
        margin: 5px auto;
      }
      & > div {
        margin: 0 auto;
      }
    }
</style>