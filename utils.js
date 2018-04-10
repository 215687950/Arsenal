/**
 * @fileOverview  方法集
 * @author        guangyu jin
 * @date          2018-04-10
 * @directory     父子页面交互
 */

/**
 * 父子页面交互
 */
window.open('sUrl', 'sName', 'sFeature', 'bReplace'); // 父页面

window.opener.document.getElementById('xx'); // 子页面获取父元素