// const chooseLocation = requirePlugin('chooseLocation');

// const location = JSON.stringify({
//   latitude: 39.89631551,
//   longitude: 116.323459711
// });
// const category = '生活服务,娱乐休闲';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: '上海海洋大学校园打卡',

    markers: [{
      id: 1,
      latitude: 30.883064,
      longitude: 121.896216,
      name: '图书馆'
    },
      {
        id: 2,
        latitude: 30.883064,
        longitude: 121.896216,
        name: '图书馆'
      }
    ],
  polygons:[
    {width:3},
    {points:[
    {//p1
      latitude: 30.882065,
      longitude: 121.896942
    },
    {//p2
      latitude: 30.88208,
      longitude: 121.897777
    },
    {//p3
      latitude: 30.882502,
      longitude: 121.898363
    },
    {//p4
      latitude: 30.881927,
      longitude: 121.89904
    },
    {//p8
      latitude: 30.881624,
      longitude: 121.898646
    },
    {//p7
      latitude: 30.881927,
      longitude: 121.898319
    },
    {//p6
      latitude: 30.88167,
      longitude: 121.898008
    },
    {//p5
      latitude: 30.88167,
      longitude: 121.896937
    }]},
   // {strokeColor:blue},
   // {fillColor:red}
    ]

    // toSomewhere:function(){
    //   wx.navigateTo({
    //     url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&   category=${category}`
    //   });
    // }

    // covers: [{
    //   latitude: 23.099994,
    //   longitude: 113.344520,
    //   iconPath: '/image/location.png'
    // }, {
    //   latitude: 23.099994,
    //   longitude: 113.304520,
    //   iconPath: '/image/location.png'
    // }]
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

  // /**
  //  * 生命周期函数--监听页面显示
  //  * 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
  //  */
  // onShow: function() {
  //   const location = chooseLocation.getLocation(); 
  //   // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
  // },

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