// pages/player/player.js
const app = getApp();
const regeneratorRuntime = require('regenerator-runtime');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
    paused:true,
    player:null,
    recommends:[]
  },

  handlePlay(){
    let { info, player, paused} = this.data;
    let { file_link } = info;
    if(!player){
      player = wx.createInnerAudioContext();
      // 设置歌曲地址
      player.src = file_link;

      // 监听歌曲播放
      player.onTimeUpdate(()=>{
        console.log('onTimeUpdate')
      })
      this.setData({
        player
      })
    }

    console.log(paused);

    // 播放
    if (paused){
      player.play();
      paused = false;
    }else{
      player.pause();
      paused = true
    }

    this.setData({
      paused
    })
  },

  handleDownload(){
    let { lrclink} = this.data.info;
    wx.downloadFile({
      url:lrclink,
      success(){
        wx.showToast({
          title:'歌词下载成功..'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function ({id}) {
    console.log('id:',id)
    // id = "606149060";
    // wx.request({
    //   url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
    //   data: {
    //     method: 'baidu.ting.song.play',
    //     songid: id
    //   },
    //   success: ({ data }) => {
    //     console.log('res:', data);

       
    //   }
    // })

    let data = await app.getData({
      method: 'baidu.ting.song.play',
      data:{
        songid: id
      }
    })

    console.log(data)

    

    // 歌词信息
    let lrcinfo = await app.getData({
      method:'baidu.ting.song.lry',
      data:{
        songid: id
      }
    })
    console.log(lrcinfo);

    // 获取当前歌曲信息
    let fileinfo = await app.getData({
      method: 'baidu.ting.song.downWeb',
      data: {
        songid: id,
        bit:128,
        _t:Date.now()
      }
    })
    console.log('fileinfo:',fileinfo);

    // 推荐列表
    let recommends = await app.getData({
      method: 'baidu.ting.song.getRecommandSongList',
      data: {
        song_id: id,
        num: 5
      }
    })
    console.log('recommends:', recommends);

    this.setData({
      info: {
        ...data.songinfo,
        ...data.bitrate
      },
      recommends: recommends.result.list
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