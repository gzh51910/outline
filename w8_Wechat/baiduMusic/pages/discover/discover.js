// pages/discover/discover.js
const app = getApp();
const regeneratorRuntime = require('regenerator-runtime');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    size:10,
    datalist:[],
    loading:false,
    hasMore:true, //是否还有未加载数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({type}) {
    console.log('type:',type);
    // type = 1;

    let {size} = this.data;
    let data = await app.getData({
      type,
      data:{
        size
      }
    });

    this.setData({
      type,
      datalist:data.song_list
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    let {page,size,datalist,type,hasMore} = this.data;
    if(!hasMore){
      return;
    }

    page++;

    // 计算offset值
    let offset = (page-1)*size;

    // 显示loading
    this.setData({
      loading:true
    })

    // 发起请求
    let data = await app.getData({
      type,
      data: {
        size,
        offset
      }
    });

    // 数据请求回来后，利用返回的数据长度来判断后面是否还有未加载数据
    if(data.song_list === null){
      hasMore = false;
    }else{
      hasMore = data.song_list.length === size
      // 追加数据
      datalist.push(...data.song_list)
    }

    this.setData({
      page,
      datalist,
      loading:false,
      hasMore
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})