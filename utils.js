/**
 * @fileOverview  方法集
 * @author        GuangYu Jin
 * @date          2018-04-10
 * @directory     父子页面交互
 */

/**
 * 父子页面交互
 */

window.open('sUrl', 'sName', 'sFeature', 'bReplace'); // 父页面

window.opener.document.getElementById('xx'); // 子页面获取父元素

/**
* 数组去重
* */

// 1
[...new Set(array)]

// 2
function dedupe (array) {
  return Array.from(new Set(array))
}
