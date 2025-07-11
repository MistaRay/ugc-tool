// pages/chatBot/chatBot.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    chatMode: "model", // Use model mode, not bot
    showBotAvatar: true, // 是否在对话框左侧显示头像
    envShareConfig: {}, // Always provide an object for envShareConfig
    // envShareConfig: {
    //   // 不使用环境共享，请删除此配置或配置EnvShareConfig:null
    //   // 资源方 AppID
    //   resourceAppid: "wx7ac1bfecc7bf5f4f",
    //   // 资源方环境 ID
    //   resourceEnv: "chriscc-demo-7ghlpjf846d46d2d",
    // },
    // agentConfig: {
    //   botId: "bot-c5167aab", // agent id,
    //   allowWebSearch: true, // 允许客户端选择启用联网搜索
    //   allowUploadFile: true, // 允许上传文件
    //   allowPullRefresh: true, // 允许下拉刷新
    //   allowUploadImage: true, // 允许上传图片
    //   showToolCallDetail: true, // 展示 toolCall 细节
    //   allowMultiConversation: true,
    //   allowVoice: true,
    //   showBotName: true
    // },
    modelConfig: {
      modelProvider: "deepseek", // Use DeepSeek
      quickResponseModel: "deepseek-v3", // Or "deepseek-r1" if you want
      logo: "",
      welcomeMsg: "🎯 UGC 社交媒体工具\n\n上传任何照片，我将为您生成引人入胜的社交媒体内容！完美适用于 Instagram、Facebook、TikTok 等平台。\n\n点击下方的相机图标开始吧！",
      apiKey: "sk-ed983e164b074054a45a742d50622582" // Your DeepSeek API key
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
