import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { CatProvider } from '~/providers/cat.provider';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <CatProvider>
      <header class="text-center my-4">
        <h1 class="text-3xl font-bold">Cats app</h1>
      </header>

      <main class="text-center my-2 max-w-md mx-auto px-4">
        <Slot />
      </main>
    </CatProvider>
  );
});
