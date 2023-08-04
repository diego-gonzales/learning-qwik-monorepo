import { $, component$, useComputed$, useSignal } from '@builder.io/qwik';
import {
  routeLoader$,
  type DocumentHead,
  useNavigate,
  useLocation,
} from '@builder.io/qwik-city';
import { ENV_OMDB_KEY } from '~/const';
import { type Movie } from '~/interfaces/movie.interface';

import { getMoviesByKeyword } from '~/services/movie.service';

export const useMoviesLoader = routeLoader$(async ({ query, fail, env }) => {
  const search = query.get('search') ?? '';
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

    nav(`/?search=${inputValue}`);
  });

  return (
    <>
      <header class="text-center">
        <h1 class="text-3xl">Movies App</h1>
      </header>

      <main class="my-4 flex flex-col items-center">
        <section>
          {/* <MovieSearcher /> */}
          <form
            class="flex gap-2"
            onSubmit$={handleSubmit}
            preventdefault:submit
          >
            <input
              type="text"
              class="bg-transparent border rounded-sm p-1"
              placeholder="Type here to search"
              bind:value={search}
            />
            <button
              type="submit"
              class="bg-blue-500 py-1 px-3 rounded-sm  hover:opacity-95 transition-opacity"
            >
              Search
            </button>
          </form>
        </section>

        {newData.value.errorMessage && !location.isNavigating && (
          <div class="italic font-bold text-center my-4">
            {newData.value.errorMessage}
          </div>
        )}

        {newData.value &&
          !newData.value.errorMessage &&
          !location.isNavigating && (
            <div class="my-4">
              <ul class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {newData.value.map((movie: Movie) => (
                  <li key={movie.imdbID}>
                    <img
                      class="w-full"
                      src={movie.Poster}
                      alt={movie.Title}
                      width={250}
                      height={350}
                    />
                    <p class="text-center font-bold">{movie.Title}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {location.isNavigating && <p>Loading...</p>}
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Movies App',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
