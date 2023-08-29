import { type Cookie } from '@builder.io/qwik-city';

export const getDataFromCookies = (cookie: Cookie, key: string) => {
  return cookie.get(key)?.value;
};

export const saveDataInCookies = (cookie: Cookie, key: string, data: any) => {
  cookie.set(key, data, {
    secure: true,
    path: '/',
  });
};
