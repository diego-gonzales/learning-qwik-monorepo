import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section>
        <h1 class="mb-4 text-5xl font-extrabold">Free music for creators</h1>
        <h3 class="text-xl font-extrabold">
          No copyright claims. Your favorite beatmakers.
        </h3>
      </section>
    </>
  );
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
