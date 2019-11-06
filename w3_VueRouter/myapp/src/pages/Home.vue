<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in recommend" :key="item">
        <img :src="item.image" style="width:100%" />
      </el-carousel-item>
    </el-carousel>
    <!-- 列表数据 -->
    <div v-for="item in datalist" :key="item.title">
      <h3>{{item.title}}</h3>
      <el-row :gutter="20">
        <el-col 
        v-for="goods in item.item" 
        :key="goods.goods_id" 
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        :xl="3"
        >
          <el-card :body-style="{ padding: '0px', height:'400px'}" @click.native="gotoDetail(goods.goods_id)">
            <img :src="goods.goods_image" class="image" />
            <h4>{{goods.goods_name}}</h4>
            <p class="price">
              <del>{{goods.goods_price}}</del>
              <span>{{(goods.goods_price*0.8).toFixed(2)}}</span>
            </p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      recommend: [],
      datalist: []
    };
  },
  methods:{
      gotoDetail(id){
          this.$router.push({name:'goods',params:{id}})
      }
  },
  async created() {
    let {
      data: { datas }
    } = await axios.get("https://www.nanshig.com/mobile/index.php?act=index");
    console.log(datas);

    // 轮播图数据
    this.recommend = datas[0].adv_list.item;

    this.datalist = datas.slice(1).map(item => {
      return item.goods;
    });
  }
};
</script>
<style lang="scss">
.el-carousel {
  margin: 0;
  background-color: #58bc58;
  h3 {
    text-align: center;
    line-height: 110px;
  }
}
</style>