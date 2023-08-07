import { component$ } from '@builder.io/qwik';
import { type Movie } from '~/interfaces/movie.interface';

interface Props {
  movie: Movie;
}

export const MovieItem = component$<Props>(({ movie }) => {
  return (
    <>
      <img
        class="w-full"
        src={movie.Poster}
        alt={movie.Title}
        width={250}
        height={350}
      />
      <div class="text-center mt-2">
        <p class="font-bold">{movie.Title}</p>
        <p>({movie.Year})</p>
      </div>
    </>
  );
});
