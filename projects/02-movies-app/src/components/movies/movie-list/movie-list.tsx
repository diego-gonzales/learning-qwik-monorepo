import { component$ } from '@builder.io/qwik';
import { type Movie } from '~/interfaces/movie.interface';
import { MovieItem } from '../movie-item/movie-item';

interface Props {
  movies: Movie[];
}

export const MovieList = component$<Props>(({ movies }) => {
  return (
    <ul class="grid gap-y-6 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie: Movie) => (
        <li class="text-center" key={movie.imdbID}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </ul>
  );
});
