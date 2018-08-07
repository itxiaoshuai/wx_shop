// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array_home_navbar: ['护肤', '彩妆', '香水', '个人护理'],
    currentTab: 0,
    imgUrls: [
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161219\/148211980641.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/148238831285.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/14823895573.png'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s
    circular: true, //是否采用衔接滑动


    // navItems

    navItems: [
      {
        typeId: 0,
        name: '品牌馆',
        url: 'bill',
        imageurl: '../../images/personal_normal.png',
      },
      {
        typeId: 1,
        name: '类目',
        url: 'bill',
        imageurl: '../../images/personal_normal.png',
      },

      {
        typeId: 2,
        name: '特惠专场',
        url: 'bill',
        imageurl: '../../images/personal_normal.png',
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: '../../images/personal_normal.png',
      }

    ],




  },
  // 导航切换监听

  navbarTap: function(e) {

    console.debug(e.currentTarget.dataset.idx);


    this.setData({

      currentTab: e.currentTarget.dataset.idx

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})