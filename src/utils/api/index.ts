import type { AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

import { getToken, setToken } from '$stores/token';

const _: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

const reIssueToken = () => {
  const userId = getToken('userId');
  const accessToken = document.cookie;
  const refreshToken = getToken('refresh');
  return _.post('/users/token/reissue', {
    userId,
    accessToken,
    refreshToken,
  }).then((res) => {
    const {
      // eslint-disable-next-line no-shadow
      data: { userId, accessToken, refreshToken },
    } = res;
    document.cookie = accessToken;
    setToken('refresh', refreshToken);
    setToken('userId', userId);
  });
};

const customAxios = {
  get: (url: string) => {
    const { cookie } = document;
    return _.get(url, { headers: { accessToken: cookie } }).catch((e) => {
      if (e.response.data.code === 'U005') reIssueToken().then(() => _.get(url));
    }) as Promise<AxiosResponse<any, any>>;
  },
  post: (url: string, body: any) =>
    _.post(url, body, { headers: { accessToken: document.cookie } }).catch((e) => {
      if (e.response.data.code === 'U005') reIssueToken().then(() => _.post(url, body));
    }) as Promise<AxiosResponse<any, any>>,
};
export default customAxios;
