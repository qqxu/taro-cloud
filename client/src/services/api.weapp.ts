import Taro from '@tarojs/taro'

export const loadCommunicateContent = ({ text }) => {
  Taro.showLoading({ title: '努力连接中...', mask: true });

  return new Promise((resolve, reject) => {
    if (!text) return;
    console.log('本地发起云函数1');

      Taro.cloud
        .callFunction({
          name: "login",
          data: {
            text,
          }
        })
        .then(res => {
          console.log('2 本地发起云函数成功', res);
          resolve(JSON.parse((res.result) as string))
          Taro.hideLoading();

        }).catch(err => {

          console.log('2 本地发起云函数失败',typeof err, err);
          reject({
            code: 1,
            msg: '啊哦，连接失败，稍后再试呢'
          })
          Taro.hideLoading();


        })
  })

}
