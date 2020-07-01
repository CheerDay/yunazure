// pages/opinion/index.js
const db =  wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    swiperHeight:1000
  },

  
  commit:function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initBanners()
  },
  async initBanners(){
    const _data = {}
    // 读取头部轮播图
    db.collection('image').get().then(res=>{
      if(res.data){
        _data.banners = res.data
        this.setData(_data)
      }else{
        wx.showModal({
          title: '提示',
          content: 'error',
          showCancel: false
        })
      }
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