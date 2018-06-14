// pages/order/order.js

const getUserURL = 'http://59.110.168.228:8080/order_food_service/f/order/test';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText: '请输入您的姓名'
  },

  formSubmit: function(e) {
    var form = this;

    if(!!e.detail.value.emptyName) {
      wx.request({
        url: getUserURL,
        data: { name: e.detail.value.emptyName },
        success: function (request) {
          if (!!request.data) {
            wx.showModal({
              content: '欢迎 ' + request.data.userName + ' 使用点餐系统，祝您使用愉快。',
              showCancel: false
            })
          } else {
            wx.showModal({
              content: '对不起，您不是本公司员工',
              showCancel: false
            })
          }
        }
      })
    }else {
      wx.showModal({
        content: '请输入您的姓名',
        showCancel: false
      })
    }
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