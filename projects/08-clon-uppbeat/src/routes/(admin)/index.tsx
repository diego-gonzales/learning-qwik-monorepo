import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { Playlist } from "~/components/shared/playlist/playlist";
import data from "~/assets/data/songs.json";
import { type Song } from "~/interfaces/song.interface";

// this routeLoader is used inside the Playlist component, but it's defined here because it only can be defined at 'index.tsx' or 'layout.tsx' files.
export const useSongList = routeLoader$(() => {
  return data as Song[];
});

export default component$(() => {
  return (
    <>
      <section>
        <h1 class="mb-4 text-5xl font-extrabold">Free music for creators</h1>
        <h3 class="text-xl font-extrabold">
          No copyright claims. Your favorite beatmakers.
        </h3>
      </section>

      <section class="py-6">
        <Playlist />
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
