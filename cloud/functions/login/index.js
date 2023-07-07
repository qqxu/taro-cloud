// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')
const got = require('got')
const { API_KEY } = require('./private/config')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async (event, context) => {
  console.log('event ', event)
  console.log('context', context)
  var url = 'https://api.a20safe.com/api.php?api=36&key=' + API_KEY + '&text=' + encodeURI(event.text);

  console.log('云端开始接口调用', url);

  var response = await got(url)
  console.log('云端接口调用结果', response);
  return response.body
}

