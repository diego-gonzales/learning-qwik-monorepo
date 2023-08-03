import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { CatImage } from '~/components/cat-image/cat-image';
import { useCat } from '~/hooks/use-cat';
import { getCatFact } from '~/services/cat-fact.service';

export const useCatFactLoader = routeLoader$(async () => {
  const fact = getCatFact();
  return fact;
});

export default component$(() => {
  const catFact = useCatFactLoader();
  const { fact, word, imgUrl, changeToNewFact } = useCat(catFact.value);

  return (
    <>
      <button
        class="border rounded-md py-2 px-3 bg-blue-500 text-white hover:opacity-90 transition-opacity"
        onClick$={changeToNewFact}
      >
        Get new fact
      </button>
      <section class="my-4">{fact.value}</section>
      <section class="my-4 flex flex-col justify-center items-center">
        <CatImage imgUrl={imgUrl.value} word={word.value} />
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home - Cats App',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
