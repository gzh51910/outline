<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <el-menu-item :index="item.name" v-for="item in menu" :key="item.name">{{item.text}}</el-menu-item> -->
      <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">{{item.text}}</el-menu-item>
    </el-menu>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex:'/home',
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
          name: "cart",
          path: "/cart",
          text: "购物车"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的"
        },
        // {
        //   name: "reg",
        //   path: "/reg",
        //   text: "注册"
        // },
        // {
        //   name: "login",
        //   path: "/login",
        //   text: "登录"
        // }
      ]
    };
  },
  methods: {
    // goto(name) {
    //   // 通过路径
    //   // this.$router.push(path)
    //   // this.$router.replace(path)
    //   // this.$router.push({path})

    //   // 通过路由名称跳转
    //   this.$router.push({name});
    // }
  },
  created(){
    console.log(this.$route);
    // 刷新保持高亮
    this.activeIndex = this.$route.path
  }
};
</script>

<style lang="scss">
body{margin:0;}
.container main{padding:10px;}
.active {
  color: #f00;
  font-weight: bold;
}
.price{
  del{color:#999;margin-right:5px;}
  del::before{
    content:'￥'
  }
  span{color:#f00;}
}
</style>
