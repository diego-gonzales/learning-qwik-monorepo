import { type CatFactResponse } from '~/interfaces/cat-fact.interface';

export const getCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  const { fact } = (await response.json()) as CatFactResponse;

  return fact;
};
