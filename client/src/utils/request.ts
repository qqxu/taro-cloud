import Taro from '@tarojs/taro';

export default async function request(config) {
  if (config.showLoading) {
    Taro.showLoading({ title: '请稍等...', mask: true });
  }
  const { success: originSuccess, fail: originFail } = config || {};
  let resp = await Taro.request({
    ...config,
    success: (res) => {
      if (config.showLoading) {
        Taro.hideLoading();
      }
      originSuccess?.(res);
    },
    fail: (err) => {
      if (config.showLoading) {
        Taro.hideLoading();
      }
      originFail?.(err);
    }
  });
  return resp.data || {};

};
