import { type ErrorResponse } from '~/interfaces/error-response.interface';
import type { Login, LoginResponse } from '~/interfaces/login.interface';

export const login = async (credentials: Login) => {
  const url = 'http://localhost:3000/auth/login';
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

export const validateToken = async (token: string) => {
  const url = 'http://localhost:3000/auth/refresh-token';
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
