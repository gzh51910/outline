//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    category: [{
      type: 1,
      title: '新歌榜',
      name: '新歌'
    }, {
      type: 2,
      title: '热门歌曲',
      name: '热歌'
    }, {
      type: 11,
      title: '摇滚重金属',
      name: '摇滚'
    }
      , {
      type: 12,
      title: '爵士音乐',
      name: '爵士'
    }
      , {
      type: 16,
      title: '网络流行',
      name: '流行'
    }
      , {
      type: 21,
      title: '欧美金曲榜',
      name: '欧美'
    }
      , {
      type: 22,
      title: '经典老歌榜',
      name: '老歌'
    }
      , {
      type: 23,
      title: '情歌对唱榜',
      name: '情歌'
    }
      , {
      type: 24,
      title: '影视金曲榜',
      name: '影视'
    }
      , {
      type: 25,
      title: '网络歌曲榜',
      name: '网络'
    }]
  },
  getData(options={}){
    let { method = 'baidu.ting.billboard.billList',type,data={size:5,offset:0}} = options;
    return new Promise((resolve,reject)=>{
      wx.request({
        url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
        data: {
          ...data,
          method,
          type,
        },
        success: ({
          data
        }) => {
          resolve(data)
        },
        fail(){
          reject()
        }
      })
    })
    
  }
})