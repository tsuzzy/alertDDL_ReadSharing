// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:['a','b','c'],
    imgUrls:[
      { image:'https://cn.bing.com/th?id=OIP.Kr1fBUfR3Ljh0fVE-PC4DgHaEo&pid=Api&rs=1'},
      { image:'https://cn.bing.com/th?id=OIP.JJgAnPLYP4_BzxlIzFIESgHaEo&pid=Api&rs=1'},
      { image:'https://cn.bing.com/th?id=OIP._5a9Ws1nonLmeVNiuU386gHaFj&pid=Api&rs=1'}
    ],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval:5000,
    duration:500,
  },


  toMap: function () {
    wx.navigateTo({
      url: '../maps/maps'
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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