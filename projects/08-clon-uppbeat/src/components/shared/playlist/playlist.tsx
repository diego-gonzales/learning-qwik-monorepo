import { component$ } from "@builder.io/qwik";
import { useSongList } from "~/routes/(admin)";
import { PlaylistItem } from "../playlist-item/playlist-item";
import type { Song } from "~/interfaces/song.interface";

export const Playlist = component$(() => {
  const songList = useSongList();

  return (
    <ul class="flex flex-col gap-2 rounded-t-2xl bg-gray-100 p-5">
      {songList.value.map((song: Song) => (
        <li key={song.id}>
          <PlaylistItem song={song} />
        </li>
      ))}
    </ul>
  );
});
