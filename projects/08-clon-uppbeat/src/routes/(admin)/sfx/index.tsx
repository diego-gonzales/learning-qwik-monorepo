import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>SFX Page!</div>;
});

export const head: DocumentHead = {
  title: "Uppbeat Clon Sound Effects",
  meta: [
    {
      name: "description",
      content: "Uppbeat Clon Sound Effects",
    },
  ],
};
