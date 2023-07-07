import { View, Input, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { loadCommunicateContent } from '../../services/api';

import './index.less'
import { useState } from 'react';

export default function Index() {

  const [inputVal, setInputVal] = useState('');
  const [content, setContent] = useState([]);

  const handleInput = (e)=> {
    setInputVal(e?.detail?.value)
  }

  const handleChat = async ()=> {
    if (!inputVal) {
      Taro.showToast('快来输入问题吧');
      return
    }
    console.log('1 handleChat 本地开始接口调用');
    const res = await loadCommunicateContent({ text: inputVal });

    console.log('3 handleChat 本地开始接口调用成功',typeof res, res);

    const { code, msg, data } = res;
    console.log('4 handleChat code === 0', code === 0);

    if (code !== 0 ) {
      Taro.showToast(msg);
      return;
    }
    setContent(prevContent => {
      const newContent = [...data, ...prevContent];
      console.log('newContent, prevContent', newContent);
      return newContent;
    });
  }

  const handleClear = ()=> {
    setContent([]);
  }

  return (
    <View className="wrapper">
      <View className="inputWrapper">
        <Input
          className="inputBox"
          type='text'
          onInput={handleInput}
          placeholder='快来和我聊天呀'
          confirmType='send'
        />
        <Button className="sendBtn" onClick={handleChat}>发送</Button>
      </View>

      <View className="toolWrapper">
        <Button className="clearBtn" onClick={handleClear}>清空对话</Button>

      </View>
      <View className='contentWrapper'>
        {
          content?.map?.(({ question, reply, key }) => {
            return (
              <View className='groupWrapper' key={key}>
                <View className='question'>{`问：${question}`}</View>
                <View className='reply'>{`答：${reply}`}</View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}
