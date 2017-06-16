// info.js
var util = require('../../utils/util.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
      list: [
        {
          name: "邓建宇",
          text: "123",
          time: "2017-06-03",
        }, {
          name: "邓建宇1",
          text: "1234",
          time: "2017-06-04",
        }, {
          name: "邓建宇2",
          text: "1235",
          time: "2017-06-05",
        }, {
          name: "邓建宇3",
          text: "12345",
          time: "2017-06-07",
        }
      ]
    },
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo, 
        info: (that.data.info.list).map(function (listItem) {
          console.log(listItem.time)
          return {
            name: listItem.name,
            text: listItem.text,
            time: util.formatDate(new Date(listItem.time)),
            avatar: listItem.avatar || userInfo.avatarUrl
          }
        })
      });
    })
    console.log("info----" + JSON.stringify(that.data.info))
  },
  openSwiper:function(){
    wx.navigateTo({
      url: '../swiper/swiper'
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