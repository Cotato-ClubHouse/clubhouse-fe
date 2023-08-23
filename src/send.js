import axios from 'axios'
import { store } from '@/store';
import { router } from '@/router/index';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
  });
  
  // 요청 인터셉터 추가
  instance.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      console.log("저장 토큰" + store.getters.getToken);
      let accessToken = store.getters.getToken;
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    function (error) {
      // 요청 오류가 있는 경우 작업 수행
      return Promise.reject(error);
    },
  );
  
  // 응답 인터셉터 추가
  instance.interceptors.response.use(
    function (response) {
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거
      // 응답 데이터가 있는 작업 수행
    },
    async function (error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거
      // 응답 오류가 있는 작업 수행
      if (error.response && error.response.status) {
        switch (error.response.status) {
          // status code가 401인 경우 `logout`을 커밋하고 `/login` 페이지로 리다이렉트
          case 401:
          try {
            // Request a new access token using refresh token
            const refreshToken = getRefreshTokenFromCookie();
            if (refreshToken) {
              const response = await instance.post('/v1/users/reissue', null, {
                withCredentials: true
              });
              const newAccessToken = response.headers['accessToken'];
              
              store.commit('setToken', { token: newAccessToken });
              
              error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
              return instance(error.config);
            } else {
              // No refresh token, redirect to login
              store.commit('setToken', { token: null });
              router.push('/login').catch(() => {});
              return Promise.reject(error);
            }
          } catch (reissueError) {
            console.log('Failed to reissue token:', reissueError);
            // Handle reissue token error, e.g., redirect to login
            store.commit('setToken', { token: null });
            router.push('/login')
            return Promise.reject(error);
          }
          
        default:
          return Promise.reject(error);
      }
    }

    return Promise.reject(error);
    },
    function getRefreshTokenFromCookie() {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
          const [name, value] = cookie.split('=');
          if (name === 'refreshToken') {
            return value;
          }
        }
        return null; // refreshToken이 존재하지 않으면 null 반환
      }
  );