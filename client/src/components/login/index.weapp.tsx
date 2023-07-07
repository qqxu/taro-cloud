import { Component, PropsWithChildren } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Index extends Component<PropsWithChildren> {
  state = {
    context: {}
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    console.log('本地发起云函数1');

    Taro.cloud
      .callFunction({
        name: "login",
        data: {
          "type": "yuantong",
          "id":"11111111111"
        }
      })
      .then(res => {
        console.log('2 本地发起云函数成功', res);
        this.setState({
          context: res.result
        })
      }).catch(ee => {
        console.log('2 本地发起云函数失败', ee);

      })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.getLogin}>获取登录云函数</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    )
  }
}
