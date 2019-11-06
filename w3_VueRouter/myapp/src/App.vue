<template>
  <div>
    <ul>
      <li v-for="item in menu" :key="item.name">
        <router-link :to="item.path" tag="span" exact-active-class="active">{{item.text}}</router-link>
        </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menu: [
        {
          name: "home",
          path: "/home",
          text: "首页"
        },
        {
          name: "list",
          path: "/list",
          text: "列表"
        },
         {
          name:'cart',
          path:'/cart',
          text:'购物车'
        },
         {
          name:'mine',
          path:'/mine',
          text:'我的'
        },
         {
          name:'reg',
          path:'/reg',
          text:'注册'
        },
         {
          name:'login',
          path:'/login',
          text:'登录'
        }
      ]
    };
  },
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{color:#f00;font-weight:bold;}
</style>
