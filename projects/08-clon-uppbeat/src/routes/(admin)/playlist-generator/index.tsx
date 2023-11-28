import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Playlist Generator Page!</div>;
});

export const head: DocumentHead = {
  title: "Uppbeat Clon Playlist Generator",
  meta: [
    {
      name: "description",
      content: "Uppbeat Clon Playlist Generator",
    },
  ],
};
