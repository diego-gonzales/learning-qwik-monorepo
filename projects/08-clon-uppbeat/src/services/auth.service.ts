import { type ErrorResponse } from "~/interfaces/error-response.interface";
import { type LoginCredentials } from "~/interfaces/login-credentials.interface";
import { type LoginResponse } from "~/interfaces/login.interface";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (credentials: LoginCredentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = (await response.json()) as ErrorResponse;
    throw error;
  }

  const data = (await response.json()) as LoginResponse;
  return data;
};
