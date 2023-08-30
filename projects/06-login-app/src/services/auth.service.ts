import { type EnvGetter } from '@builder.io/qwik-city/middleware/request-handler';
import { type ErrorResponse } from '~/interfaces/error-response.interface';
import type { Login, LoginResponse } from '~/interfaces/login.interface';
import type {
  RegisterResponse,
  Register,
} from '~/interfaces/register.interface';

export const login = async (credentials: Login, envLocal: EnvGetter) => {
  const url = `${envLocal.get('API_URL')}/auth/login`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = (await response.json()) as ErrorResponse;
    throw error.message;
  }

  const data = (await response.json()) as LoginResponse;
  return data;
};

export const register = async (info: Register, env: EnvGetter) => {
  const url = `${env.get('API_URL')}/auth/register`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = (await response.json()) as ErrorResponse;
    throw error.message;
  }

  const data = (await response.json()) as RegisterResponse;
  return data;
};

export const validateToken = async (token: string, env: EnvGetter) => {
  const url = `${env.get('API_URL')}/auth/refresh-token`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = (await response.json()) as ErrorResponse;
    throw error.message;
  }

  const data = (await response.json()) as LoginResponse;
  return data;
};

export const logout = () => {
  // clear token and user from cookies
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};
