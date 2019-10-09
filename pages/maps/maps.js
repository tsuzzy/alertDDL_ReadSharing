Page({
  data: {
    latitude: 30.882894,
    longitude: 121.89691,
    markers: [{
      id: 1,
      latitude: 30.883064,
      longitude: 121.896216,
      name: '图书馆'
    },{
      id:2,
      latitude: 30.881974,
      longitude: 121.897771,
      name:'第一教学楼'
    }],
    polygons:[{
      points:[
        {
          latitude: 30.882065,
          longitude: 121.896942
        },
        {
          latitude: 30.88208,
          longitude: 121.897777
        },
        {
          latitude: 30.882502,
          longitude: 121.898363
        },
        {
          latitude: 30.881927,
          longitude: 121.89904
        },
        {
          latitude: 30.881624,
          longitude: 121.898646
        },
        {
          latitude: 30.881927,
          longitude: 121.898319
        },
        {
          latitude: 30.88167,
          longitude: 121.898008
        },
        {
          latitude: 30.88167,
          longitude: 121.896937
        }
      ],
      fillColor:"#3FFFFF",
      strokeColor:"#000080"
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:23.10229,
        longitude:113.3345211,
      }, {
        latitude:23.00229,
        longitude:113.3345211,
      }]
    })
  }
})
