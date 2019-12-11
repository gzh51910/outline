<template>
  <div>
    <h1>MPV框架测试</h1>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <button @click="changeQty">{{qty}}</button>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      qty: 1
    }
  },

  components: {
    card
  },

  methods: {
    changeQty () {
      this.qty++
    }
  },

  created () {}
}
</script>

<style scoped>
h1 {
  color: #58bc58;
  font-size: 30px;
}
</style>
