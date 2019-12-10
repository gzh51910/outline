// pages/search/search.js
let app = getApp();

// regeneratorRuntime= require('regenerator-runtime')
import regeneratorRuntime from 'regenerator-runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'',
    inputShowed:true,
    datalist:[],
    albumlist:[]
  },

  // 显示搜索框
  showInput(){
    this.setData({
      inputShowed:true
    })
  },
  hideInput() {
    this.setData({
      inputShowed: false
    })
  },
  // 输入关键字搜索
  inputTyping(e){
    let keyword = e.detail.value;

    if(keyword === ''){
      this.setData({
        datalist:[]
      })
    }else{
      this.query(keyword);
    }

    this.setData({
      keyword
    })
  },

  // 清空输入框
  clearInput(){
    this.setData({
      keyword:''
    })
  },

  async query(keyword){
    let data = await app.getData({ method: 'baidu.ting.search.catalogSug', data: { query: keyword } })

    let datalist = data.song;
    this.setData({
      datalist,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({keyword}) {
    // console.log('keyword:',keyword)
    // keyword = '演员';

    this.query(keyword);
    this.setData({
      keyword
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
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})