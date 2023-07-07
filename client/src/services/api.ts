
import request from '../utils/request';

import { WikipediaApi, ChatGptApi } from '../../private/config';

export const searchWord = ({ text }) => {
  return request({
    url: WikipediaApi,
    method: 'GET',
    data: {
      text
    },
    showLoading: true
  })
}


export const loadCommunicateContent = ({ text }) => {
  return request({
    url: ChatGptApi,
    method: 'GET',
    data: {
      text
    },
    showLoading: true
  })
}
