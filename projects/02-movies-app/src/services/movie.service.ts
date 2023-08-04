import { API_URL } from '~/const';
import type { Movie, MoviesResponse } from '~/interfaces/movie.interface';

export const getMoviesByKeyword = async (
  search: string,
  api_key: string
): Promise<Movie[] | null> => {
  const response = await fetch(`${API_URL}/?apikey=${api_key}&s=${search}`);
  const { Search } = (await response.json()) as MoviesResponse;

  // Puede retornar un arreglo de películas o '{"Response":"False","Error":"Movie not found!"} si no se encuentran películas
  // es por eso que devuelvo un 'Promise<Movie[] | null>
  return Search;
};
