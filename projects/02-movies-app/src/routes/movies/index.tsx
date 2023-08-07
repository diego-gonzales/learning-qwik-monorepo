import { $, component$, useComputed$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$, useLocation, useNavigate } from '@builder.io/qwik-city';
import { MovieList } from '~/components/movies/movie-list/movie-list';
import { MovieSearcher } from '~/components/movies/movie-searcher/movie-searcher';
import { ENV_OMDB_KEY } from '~/const';
import { getMoviesByKeyword } from '~/services/movie.service';

export const useMoviesLoader = routeLoader$(async ({ query, fail, env }) => {
  const search = query.get('search');
  const api_key = env.get(ENV_OMDB_KEY); // this env variable is reading from '.env.local' file

  if (!search) {
    return fail(400, { errorMessage: 'Start searching a movie!' });
  }

  const movies = await getMoviesByKeyword(search, api_key!);

  if (movies == null) {
    return fail(404, { errorMessage: `There are no movies for '${search}'` });
  }

  return movies;
});

export default component$(() => {
  const data = useMoviesLoader();
  const newData = useComputed$<any>(() => data.value); // here we've used computed because the before line throw errors
  const search = useSignal('');
  const nav = useNavigate();
  const location = useLocation();

  const handleSubmit = $(() => {
    const inputValue = search.value.trim();

    if (inputValue.length === 0) return;

    nav(`${location.url.pathname}?search=${inputValue}`);
  });

  return (
    <>
      <section class="my-4">
        <MovieSearcher handleSubmit={handleSubmit} search={search} />
      </section>

      {newData.value &&
        !newData.value.errorMessage &&
        !location.isNavigating && (
          <section class="my-4">
            <MovieList movies={newData.value} />
          </section>
        )}

      {newData.value.errorMessage && !location.isNavigating && (
        <p class="italic font-bold text-center my-4">
          {newData.value.errorMessage}
        </p>
      )}

      {location.isNavigating && <p class="text-center my-4">Loading...</p>}
    </>
  );
});

export const head: DocumentHead = {
  title: 'Movies App',
  meta: [
    {
      name: 'description',
      content:
        'This is the movies page where you can start to search your favorite movies',
    },
  ],
};
