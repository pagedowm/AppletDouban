Page({

  /**
   * 页面的初始数据
   */
  data: {
    optType: true,
    hotMovieList: [],
    soonMovieList: [],
    top250MovieList: []
  },

  // 改变影院热映状态和即将上映的切换状态
  changeOptType(){
    this.setData({ optType: true });
  },
  changeOptType2() {
    this.setData({ optType: false });
  },

  // 获取热映电影列表
  getHotMovieList(){
    let that = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10',
      data: {},
      method: 'GET',
      header: { "Content-Type": "json"},
      success(res) {
        console.log(res.data.total);
        console.log(res);
        if (res.statusCode === 200){
          that.setData({
            hotMovieList: res.data.subjects
          })
        }
      },
      fail: function () {
        console.log('fail')
      },
    })
  },

  // 获取即将上映列表
  getSoonMovieList(){
    let that = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      data: {},
      method: 'GET',
      header: { "Content-Type": "json" },
      success(res) {
        console.log(res.data.subjects[0]);
        console.log(res);
        if (res.statusCode === 200) {
          that.setData({
            soonMovieList: res.data.subjects
          })
        }
      },
      fail: function () {
        console.log('fail')
      },
    })
  },

  // 获取Top250
  getTop250MovieList() {
    let that = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/top250?start=0&count=10',
      data: {},
      method: 'GET',
      header: { "Content-Type": "json" },
      success(res) {
        console.log(res.data.subjects[0]);
        console.log(res);
        if (res.statusCode === 200) {
          that.setData({
            top250MovieList: res.data.subjects
          })
        }
      },
      fail: function () {
        console.log('fail')
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotMovieList();
    this.getSoonMovieList();
    this.getTop250MovieList();
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