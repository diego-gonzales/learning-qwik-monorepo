import type { User, UsersResponse } from '~/interfaces/users.inteface';

const API_URL = 'https://randomuser.me/api/?results=100&seed=qwik';

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = (await response.json()) as UsersResponse;

    if (!data || !data.results) {
      throw new Error('Invalid API response');
    }

    return data.results;
  } catch (error) {
    // Aquí podríamos manejar el error de manera más detallada
    console.error('Error in getUsers:', error);
    throw error;
  }
};
