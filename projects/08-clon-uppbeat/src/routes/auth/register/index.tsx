import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Register page</div>;
});

export const head: DocumentHead = {
  title: "Uppbeat Clon Register",
  meta: [
    {
      name: "description",
      content: "Register to Uppbeat Clon",
    },
  ],
};
