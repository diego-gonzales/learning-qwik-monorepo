import { type Question } from '~/interfaces/question.interface';

const API_URL = 'http://localhost:5173/';

export const getQuestions = async (limit: number = 20) => {
  const response = await fetch(`${API_URL}/data.json`);
  const data = (await response.json()) as Question[];

  const randomQuestions = data.sort(() => Math.random() - 0.5).slice(0, limit);
  return randomQuestions;
};
