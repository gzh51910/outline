<template>
  <div v-if="info.goods_id">
    <img :src="info.goods_image" />
    <h1>{{info.goods_name}}</h1>
    <el-rate disabled :value="info.goods_evaluate_info.star_average"></el-rate>
    <p class="price">
      <del>{{info.goods_price}}</del>
      <span>{{(info.goods_price*0.8).toFixed(2)}}</span>
    </p>
    <el-button-group>
      <el-button type="danger" icon="el-icon-shopping-cart-2" @click="add2cart">添加到购物车</el-button>
      <el-button type="warning" icon="el-icon-goods" @click="buynow">立即购买</el-button>
    </el-button-group>

    <h3>推荐列表</h3>
    <el-row :gutter="20">
      <el-col
        v-for="goods in info.goods_commend_list"
        :key="goods.goods_id"
        :xs="8"
        :sm="6"
        :md="4"
        :lg="3"
        @click.native="gotoDetail(goods.goods_id)"
      >
        <img :src="goods.goods_image_url" class="image" />
        <h4>{{goods.goods_name}}</h4>
        <p class="price">
          <del>{{goods.goods_promotion_price}}</del>
          <span>{{(goods.goods_promotion_price*0.8).toFixed(2)}}</span>
        </p>
      </el-col>
    </el-row>
  </div>
  <div v-else v-loading.fullscreen.lock="true"></div>
</template>
<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  watch:{
    //   可以监听实例下任何属性
    //   info(newval,oldVal){

    //   },
    //   $route:function(newVal,oldVal){
    //       console.log(newVal,oldVal);
    //       if(newVal.params.id !== oldVal.params.id){

    //           this.getData();
    //       }
    //   }
  },
  methods:{
      gotoDetail(id){
        //   动态路由切换，由于使用的是同一个组件，默认会采用复用原则
        // 意味着组件不会重建和销毁，导致生命周函数不会执行，进而导致无法发起请求
          this.$router.push(`/goods/${id}`);
        //   this.$forceUpdate();
      },
      async getData(){
        let { id } = this.$route.params;
        console.log(this.$route);
        let {
        data: { datas }
        } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
        params: {
            act: "goods",
            op: "goods_detail",
            goods_id: id,
            key: ""
        }
        });

        console.log(datas);
        let {
        goods_image,
        goods_info,
        goods_evaluate_info,
        goods_hair_info,
        goods_commend_list
        } = datas;
        this.info = {
        goods_evaluate_info,
        goods_hair_info,
        goods_image,
        goods_commend_list,
        ...goods_info
        };
      },
      add2cart(){
        let {goods_id:id,goods_image:imgurl,goods_name:name,goods_promotion_price:price} = this.info;
        let {goodslist} = this.$store.state;
        // 判断当前商品是否已经存在购物车
        // 已存在：数量+1
        // 否则：添加到购物车
        let current = goodslist.filter(item=>item.id===id)[0]
        if(current){
          this.$store.commit('changeQty',{id,qty:current.qty+1})
        }else{

          let goods = {
            id,
            imgurl,
            name,
            price:(price*0.8).toFixed(2),
            qty:1
          }
          this.$store.commit('addToCart',goods)
        }

      },
      buynow(){
        this.add2cart();
        // 并跳转到购物车
        this.$router.push('/cart');
      }
  },
  created() {
    this.getData();
  },
//   beforeRouteEnter(to, from, next){
//       console.log('Goods.beforeRouteEnter')
//       next();
//   },
//   beforeRouteLeave(to, from, next){
//       console.log('Goods.beforeRouteLeave');
//       next();
//   },
  beforeRouteUpdate (to, from, next) {console.log('Goods.beforeRouteUpdate')
        //to:目标路由
        //from:当前路由
        //一定要调用next()方法才可进入目标路由
        next();
        if(to.params.id !== from.params.id){
            this.getData();
        }
    }

};
</script>
<style lang="scss">
.image {
  width: 100%;
}
</style>