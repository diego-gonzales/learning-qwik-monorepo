// Generated by https://quicktype.io

import { type User } from './user.interface';

export interface RegisterResponse {
  user: User;
  access_token: string;
}

export interface Register {
  name: string;
  email: string;
  password: string;
}
