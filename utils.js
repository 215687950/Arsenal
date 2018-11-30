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

[...new Set(array)]

function dedupe (array) {
  return Array.from(new Set(array))
}

/*
* 深拷贝
* 递归 -- 未考虑死循环
*/
function deepCopy(data) {
  let t = typeof(data)
  let o
  if (t === 'array') {
    t = []
  } else if (t === 'object') {
    t = {}
  } else {
    return data
  }
  if (t === 'array') {
    for (let i; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}
