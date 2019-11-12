<template>
  <div class="container">
    <el-row :gutter="20" style="background-color:#545c64;padding-right:10px;">
      <el-col :span="18">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          router
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- <el-menu-item :index="item.name" v-for="item in menu" :key="item.name">{{item.text}}</el-menu-item> -->
          <el-menu-item :index="item.path" v-for="item in menu" :key="item.name">
            <el-badge :value="cartlength" v-if="item.name=='cart'">
              <i :class="item.icon"></i>
              {{item.text}}
            </el-badge>
            <template v-else>
              <i :class="item.icon"></i>
              {{item.text}}
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6" style="text-align:right;line-height:60px;">
        <el-button type="text" @click="logout" v-if="isLogin">退出</el-button>
        <template v-else>
          <el-button type="text" @click="goto('/reg')">注册</el-button>
          <el-button type="text" @click="goto('/login')">登录</el-button>
        </template>
      </el-col>
    </el-row>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
// 原始按需加载
// import Row from 'element-ui/lib/row'
// import 'element-ui/lib/theme-chalk/row.css'
// Vue.use(Row);//Vue.component(Row.name,Row);

// import Col from 'element-ui/lib/col'
// import 'element-ui/lib/theme-chalk/col.css'
// Vue.use(col);

// 插件按需引入
// import { Row, Col,Menu,MenuItem, Badge,Button} from 'element-ui';
// Vue.component(Row.name, Row);
// Vue.component(Col.name, Col);
// Vue.component(Menu.name, Menu);
// Vue.component(MenuItem.name, MenuItem);
// Vue.component(Badge.name, Badge);
// Vue.component(Button.name, Button);

import {mapMutations} from 'vuex';
export default {
  name: "app",
  data() {
    return {
      activeIndex: "/home",
      menu: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          name: "list",
          path: "/list",
          text: "列表",
          icon: "el-icon-menu"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "el-icon-s-custom"
        }
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
  computed:{
    cartlength(){
      // console.log('state:',this.$store.state)
      return this.$store.state.cart.goodslist.length
    },
    isLogin(){
      return Boolean(this.$store.state.common.user.Authorization);
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    // ...mapMutations(['logout']),
    logout(){
      this.$store.commit('logout');

      // 在需要登录权限的页面退出登录
      // 需要跳转到登录页面
      if(this.$route.meta.requiresAuth){
        this.$router.push({
          name:'login',
          query:{
            redirectUrl:this.$route.fullPath
          }
        })

      }
    }
  },
  created() {
    console.log(this);
    // 刷新保持高亮
    this.activeIndex = this.$route.path;
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
.container main {
  padding: 10px;
}
.active {
  color: #f00;
  font-weight: bold;
}
.price {
  >del {
    color: #999;
    margin-right: 5px;
  }
  >del::before {
    content: "￥";
  }
  >span {
    color: #f00;
    &::before {
      content: "￥";
    }
  }
}
.el-menu{
  .el-badge{
    .el-badge__content{
      top:15px;
    }
  }
}
</style>
