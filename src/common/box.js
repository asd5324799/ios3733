/* eslint-disable */
/**
 * @function getToken 获取Token
 * 
 * @function openInNewWindow 在新标签页种打开网页
 * @param url 打开页面的URL
 * 
 * @function loginSuccess 登录成功
 * @param user 接口返回的该用户的信息
 * 
 * @function upload 图片上传跨域走壳的通道
 * @param data 图片上传的data部分
 * 
 * @function openInBrowser 唤起应用
 * @param str 
 */
class Box {
  constructor() {};

  getToken() {
    let result; 
    try {
        // result = BOX.getToken();
        window.webkit.messageHandlers.getToken.postMessage(null);
        result = true;
    } catch (e) {
        result = false;
    }
    return result;
  };

  openInNewWindow(url) {
    let result;
    try {
      window.webkit.messageHandlers.openInNewWindow.postMessage(url);
        // BOX.openInNewWindow(url);
        result = true;
    } catch (e) {
        result = false;
    }
    return result;
  };

  loginSuccess(user) {
    let result;
    try {
      // BOX.refreshUser(user);
      window.webkit.messageHandlers.refreshUser.postMessage(user);
      result = true;
    } catch(e) {
      result = false;
    }
    return result;
  }

  // upload(data) {
  //   let result;
  //   try {
  //     BOX.upload(data);
  //     result = true;
  //   } catch(e) {
  //     result = false;
  //   }
  //   return result;
  // }

  openInBrowser(str) {
    let result;
    try {
      window.webkit.messageHandlers.openInBrowser.postMessage(str);
      result = true;
    } catch(e) {
      result = false;
    }
    return result;
  }
}

export default Box;