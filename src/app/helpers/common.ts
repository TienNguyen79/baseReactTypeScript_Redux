import moment from 'moment';
import { IndexedObject } from 'types/common';

// Validate
export const checkPassword = /^.{6,}$/;
export const checkRePassword = (password: string) => new RegExp('^(' + password + ')$', 'g');
export const regexCheckNumber = /^\d+$/;
export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

// Common
export const isMobile = window.screen.width <= 1024;

export const DEFAULT_MAX_LENGTH_BIO = 210;

export const publicUrl = (uri: string) => {
  return `${process.env.PUBLIC_URL}${uri}`;
};

export const isEmptyObject = (obj: IndexedObject) => {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

export const isToday = (date: Date) => moment(date).isSame(moment(), 'day');
