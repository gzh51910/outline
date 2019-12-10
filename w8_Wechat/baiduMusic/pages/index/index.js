//index.js
//获取应用实例
const app = getApp();
const regeneratorRuntime = require('regenerator-runtime');
const tabs = app.globalData.category.filter(item => [1, 2, 16, 21, 23].includes(item.type))
Page({
  data: {
    recommend: [],
    keyword: '',
    tabs,
    tabWidth: 750 / tabs.length,
    sliderOffset:0, // tab标签切换高亮线条的位置
    currentIndex:0,
    tabData:{},//tab标签数据{1:[{},{}],2:[],23:[]}
  },

  handlerTabChange(e){
    let { tabData, tabWidth} = this.data;
    let {index,type} = e.currentTarget.dataset;

    // 计算高亮位置
    let sliderOffset = index*tabWidth;
    this.setData({
      currentIndex: index,
      sliderOffset
    });

    // 请求数据
    if (tabData[type]===undefined){
      this.getTabData(type);
    }
  },

  async getTabData(type){
    // 获取第一个tab的数据
    let {  tabData } = this.data;
    let data = await app.getData({
      type,
      data:{size:3}
    });
    tabData[type] = data.song_list;
    this.setData({
      tabData
    })
  },

  onLoad: async function() {
   
    // wx.request({
    //   url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
    //   data: {
    //     method: 'baidu.ting.billboard.billList',
    //     type: 2,
    //     size: 5,
    //     offset: 0
    //   },
    //   success: ({
    //     data
    //   }) => {
    //     console.log('res:', data);
    //     let hotList = data.song_list;

    //     // 获取最热门的歌曲
    //     let hotest = hotList.sort((a, b) => b.hot - a.hot)[0]

    //     this.setData({
    //       recommend: data.song_list,
    //       keyword: hotest.title
    //     })
    //   }
    // })

     
    let data = await app.getData({
      type: 2,
      data:{
        size:15
      }
    })
    let hotList = data.song_list;

    //轮播图数据
    let recommend = hotList.slice(0, 5);

    // 搜索关键字：获取最热门的歌
    let hotest = hotList.sort((a, b) => b.hot - a.hot)[0];

    // 热门歌曲
    hotList = hotList.slice(5);

    // 获取最新歌曲
    let { song_list: newList} =  await app.getData({
      type: 1,
      data: {
        size: 10
      }
    })

    // 获取第一个tab的数据
    let { currentIndex, tabs, tabWidth} = this.data;
    let sliderOffset = currentIndex * tabWidth;
    let firstTab = tabs[currentIndex]
    this.getTabData(firstTab.type)

    this.setData({
      recommend,
      keyword: hotest.title,
      sliderOffset,
      hotList,
      newList
    })
  },

  gotoPlayer(e) {
    console.log(e)
    let {
      id
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/player/player?id=' + id
    })
  },
  gotoSearch() {
    let {
      keyword
    } = this.data;
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + keyword
    })
  }
})