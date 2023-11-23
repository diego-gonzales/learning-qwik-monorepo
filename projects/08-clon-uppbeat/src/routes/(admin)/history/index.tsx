import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>History Page!</div>;
});

export const head: DocumentHead = {
  title: "Uppbeat Clon History",
  meta: [
    {
      name: "description",
      content: "Uppbeat Clon History",
    },
  ],
};
