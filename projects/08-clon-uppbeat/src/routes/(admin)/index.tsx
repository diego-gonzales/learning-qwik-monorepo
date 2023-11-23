import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Home page</div>;
});

export const head: DocumentHead = {
  title: "Uppbeat Clon Home",
  meta: [
    {
      name: "description",
      content: "Uppbeat Clon",
    },
  ],
};
