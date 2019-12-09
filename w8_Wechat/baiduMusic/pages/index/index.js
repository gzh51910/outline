//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   recommend:[]
  },
 
  onLoad: function () {
    //轮播图数据
    wx.request({
      url:'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data:{
        method:'baidu.ting.billboard.billList',
        type:2,
        size:5,
        offset:0
      },
      success:({data})=>{
          console.log('res:', data);

          this.setData({
            recommend:data.song_list
          })
      }
    })
  },

  gotoPlayer(e){
    console.log(e)
    let {id} = e.currentTarget.dataset;
    wx.navigateTo({
      url:'/pages/player/player?id='+id
    })
  }
})
