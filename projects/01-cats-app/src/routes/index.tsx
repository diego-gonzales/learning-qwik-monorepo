import { $, component$, useComputed$, useSignal } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { getCatFact } from '~/services/cat-fact.service';

const CAT_IMG_API = 'https://cataas.com/cat/says';

export const useCatFact = routeLoader$(async () => {
  const fact = getCatFact();
  return fact;
});

export default component$(() => {
  const catFact = useCatFact();
  const fact = useSignal(catFact.value);
  const firstWord = useComputed$(() => fact.value.split(' ')[0]);
  const catImgUrl = useComputed$(() => `${CAT_IMG_API}/${firstWord.value}`);

  const handleClick = $(async () => {
    fact.value = await getCatFact();
  });

  return (
    <>
      <button
        class="border rounded-md py-2 px-3 bg-blue-500 text-white hover:opacity-90 transition-opacity"
        onClick$={handleClick}
      >
        Get new fact
      </button>
      <section class="my-4">{fact.value}</section>
      <section class="my-4 flex justify-center">
        <img
          class="object-cover"
          src={catImgUrl.value}
          alt={`Random image for the ${firstWord.value} word`}
          width="300"
          height="400"
        />
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
