<template>
  <div class="page-cart">
    <div  v-for="item in goodslist" :key="item.id">
        <el-row :gutter="30">
        <el-col :span="4">
            <img :src="item.imgurl" />
        </el-col>
        <el-col :span="16">
            <h4>{{item.name}}</h4>
            <p class="price">
            <span>{{item.price}}</span> &times;
            <el-input-number size="mini" v-model="item.qty" @change="changeQtyAsync(item.id,$event)"></el-input-number>
            </p>
        </el-col>
        <el-col :span="4" style="text-align:right">
            <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="removeItem(item.id)"></el-button>
        </el-col>
        </el-row>
        <el-divider></el-divider>
    </div>
    <el-row :gutter="30">
      <el-col :span="12">
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="clearCart">清空购物车</el-button>
      </el-col>
      <el-col :span="12" class="price" style="text-align:right">
        总计：
        <span>{{totalPrice.toFixed(2)}}</span>
      </el-col>
    </el-row>
    <!-- <div style="text-align:right">
      <el-button type="success" icon="el-icon-s-finance">去结算</el-button>
    </div> -->
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
  data() {
    return {
      // goodslist:this.$store.state.goodslist
    };
  },
  computed:{
    // goodslist(){
    //   return this.$store.state.goodslist
    // },
      // totalPrice(){
      //     // return this.goodslist.reduce((prev,item)=>prev+item.price*item.qty,0);
      //     return this.$store.getters.totalPrice
      // },
    ...mapState(['goodslist']),
    ...mapGetters(['totalPrice'])
  },
  methods:{
    // removeItem(id){
    //   this.$store.commit('removeFromCart',id)
    // },
    // clearCart(){
    //   this.$store.commit('clearCart')
    // },
    // changeQty(id,qty){
    //   this.$store.commit('changeQty',{id,qty})
    // }
    ...mapMutations({
      removeItem:'removeFromCart',
      changeQty2:(commit,payload)=>{
        // 其他额外操作
        commit('changQty',payload);
      }
    }),
    ...mapMutations(['clearCart','changeQty']),
    // changeQtyAsync(id,qty){
    //   this.$store.dispatch('changeQtyAsync',{id,qty})
    // }
    ...mapActions({
      changeQtyAsync(dispatch,id,qty){
        console.log(dispatch,id,qty)
        dispatch('changeQtyAsync',{id,qty})
      }
    })
  }
};
</script>
<style lang="scss">
.page-cart{
    img{
        width: 100%;
    }
    h4{margin-top:0;}
}
</style>