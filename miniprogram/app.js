//app.js
import deviceUtil from "./lin-ui/dist/utils/device-util"
App({


  //自定义bar height
  capsuleBarHeight: deviceUtil.getNavigationBarHeight(),


  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'damaohongtu-dev',
        traceUser: true,
      })
    }

    this.globalData = {
      domain:'http://118.195.191.165:8090/',
      baseUrl: 'http://118.195.191.165:8090/api', //api
      api_access_key:"U2FsdGVkX18MDkXATXimyf6PQ33JVzuKvURxMe9ZtF4=", //token
      index_bg_image_url:"https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/img-article/photo-1507738978512-35798112892c.jfif",//首页背景
      title:"大袤宏图",//自定义title
      shareName:'大袤宏图',//小程序分享名称
      userInfo:undefined,//登录用户信息储存处
      admin_token: undefined,//临时 token undefined
      authorInfo:undefined,//作者信息
      myCollectArticle:'myCollectArticle',//云数据库 存放收藏文章
      openComment:true,//是否开启评论 true为开启 false为关闭
      openAd:false,//流量主开通则打开
      unitId:'adunit-xxxxxxx',//原生模板广告ID  自定义的时候子集可以选择样式
      unitId2:'adunit-xxxxxxxxxxx',//视频激励广告--用于文章设置观看视频阅读更多功能
    }
  }
})
