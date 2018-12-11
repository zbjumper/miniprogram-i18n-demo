//app.js
const i18n = require('./utils/i18n');

App({
  onLaunch: function () {
    
  },
  onShow: function () {
    // 小程序热启动检测微信语言设置，由于微信的bug导致不起作用，暂时注释掉
    // 微信bug详细信息：https://developers.weixin.qq.com/community/develop/doc/00008615f4c6b037b5c71a5a956000
    // i18n.appOnShow();
  }
})