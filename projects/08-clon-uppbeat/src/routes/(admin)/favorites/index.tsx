import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Favorites Page!</div>;
});

export const head: DocumentHead = {
  title: "Uppbeat Clon Favorites",
  meta: [
    {
      name: "description",
      content: "Uppbeat Clon Favorites",
    },
  ],
};
