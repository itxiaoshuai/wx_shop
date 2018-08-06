// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array_home_navbar: ['护肤', '彩妆', '香水', '个人护理'],
    currentTab: 0,
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