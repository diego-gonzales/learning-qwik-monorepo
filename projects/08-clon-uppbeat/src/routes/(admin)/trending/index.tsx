import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Trending Page!</div>;
});

export const head: DocumentHead = {
  title: "Uppbeat Clon Trending",
  meta: [
    {
      name: "description",
      content: "Uppbeat Clon Trending",
    },
  ],
};
