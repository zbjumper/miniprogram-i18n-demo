import dlt from '../i18n/default';
import zh_CN from '../i18n/zh_CN';
import zh_TW from '../i18n/zh_TW';

const i18n = {
  'default': dlt,
  zh_CN,
  zh_TW
}

const sysinfo = wx.getSystemInfoSync();
const language = sysinfo.language;

function getI18n(language) {
  console.log(`language:${language}`)
  return i18n[language] || i18n['default'];
}

const oldPage = Page;
Page = function (pageObject) {
  pageObject = pageObject || {};
  let data = pageObject.data || {};
  const i18n = getI18n(language);
  Object.assign(data, { i18n })
  pageObject.data = data;
  oldPage(pageObject);
};

module.exports = {
  appOnShow: function (language) {
    if (!language) {
      language = wx.getSystemInfoSync().language;
    }
    const pages = getCurrentPages();
      pages.forEach(function (item) {
        const i18n = getI18n(language);
        item.setData({
          i18n
        });
      })
  }
}