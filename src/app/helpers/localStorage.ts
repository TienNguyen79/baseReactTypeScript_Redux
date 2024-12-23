import { DEFAULT_LANGUAGE, languages } from 'locales/i18n';
import { IndexedObject } from 'types/common';

// Token LocalStorage
export const saveToken = (token?: string) => {
  if (token) {
    localStorage.setItem('access_token', token);
  }
};

export const removeToken = () => {
  localStorage.removeItem('access_token');
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('access_token');
  return token;
};

// Refresh token LocalStorage
export const saveRefreshToken = (refresh_token?: string) => {
  if (refresh_token) {
    localStorage.setItem('refresh_token', refresh_token);
  }
};

export const removeRefreshToken = () => {
  localStorage.removeItem('refresh_token');
};

export const getRefreshTokenFromLocalStorage = () => {
  const refresh_token = localStorage.getItem('refresh_token');
  return refresh_token ? refresh_token : '';
};

// Save language to localStorage
export const saveLanguage = (language: string) => {
  if (languages.includes(language)) {
    localStorage.setItem('i18nextLng', language);
  } else {
    localStorage.setItem('i18nextLng', DEFAULT_LANGUAGE);
  }
};
export const getLanguage = () => {
  const language = localStorage.getItem('i18nextLng');
  return language && languages.includes(language) ? language : DEFAULT_LANGUAGE;
};

// Current User LocalStorage
export const saveUser = (data_user: IndexedObject) => {
  localStorage.setItem('data_user', JSON.stringify(data_user));
};

export const removeUser = () => {
  localStorage.removeItem('data_user');
};

export const getUserFromLocalStorage = () => {
  let data = {};
  if (localStorage.getItem('data_user')) {
    try {
      const userLocal = localStorage.getItem('data_user');
      data = JSON.parse(userLocal ? userLocal : '');
    } catch (e) {
      data = {};
    }
  }
  return data;
};

// Chỉ lưu nhưng kiểu đơn giản như số hoặc string
export const setLocalStore = (key: any, value: any) => {
  localStorage.setItem(key, value);
};
export const getLocalStore = (key: any) => {
  return localStorage.getItem(key);
};

// IndexedObject
export const saveArrObjectLS = (key: string, object: IndexedObject) => {
  localStorage.setItem(key, JSON.stringify(object));
};

export const removefromLS = (key: string) => {
  localStorage.removeItem(key);
};

export const getObjectFromLS = (key: string): IndexedObject => {
  let data = {};
  if (localStorage.getItem(key)) {
    try {
      const objectLocal = localStorage.getItem(key);
      data = JSON.parse(objectLocal ? objectLocal : '');
    } catch (e) {
      data = {};
    }
  }
  return data;
};

export const getArrayFromLS = (key: string): Array<any> => {
  let data = [];
  if (localStorage.getItem(key)) {
    try {
      const arrayLocal = localStorage.getItem(key);
      data = JSON.parse(arrayLocal ? arrayLocal : '');
    } catch (e) {
      data = [];
    }
  }
  return data;
};
