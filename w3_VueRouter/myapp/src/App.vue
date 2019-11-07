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
            <i :class="item.icon"></i>
            {{item.text}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6" style="text-align:right;line-height:60px;">
        <!-- <el-button-group> -->
          <el-button type="text" @click="goto('/reg')">注册</el-button>
          <el-button type="text" @click="goto('/login')">登录</el-button>
        <!-- </el-button-group> -->
      </el-col>
    </el-row>

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
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  },
  created() {
    console.log(this.$route);
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
  del {
    color: #999;
    margin-right: 5px;
  }
  del::before {
    content: "￥";
  }
  span {
    color: #f00;
    &::before {
      content: "￥";
    }
  }
}
</style>
