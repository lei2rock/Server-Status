// 配置
window.Config = {

  // 站点名
  SiteName: 'lei2rock\'s Server Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur904444-a24d1c36ea33d2df250c65f7',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://dlzhang.com'
    },
    {
      text: 'Blog',
      url: 'https://blog.dlzhang.com'
    }
  ]
};
