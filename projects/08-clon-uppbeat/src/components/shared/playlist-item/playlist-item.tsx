import { component$ } from "@builder.io/qwik";
import { type Song } from "~/interfaces/song.interface";
import { PlayerWave } from "../player-wave/player-wave";

interface PlaylistItemProps {
  song: Song;
}

export const PlaylistItem = component$<PlaylistItemProps>(({ song }) => {
  return (
    <article class="group">
      <div class="flex items-center rounded-bl-full rounded-tl-full p-2 transition-all duration-75 ease-out group-hover:bg-white">
        <div class="flex w-1/5 gap-6">
          <img
            class="h-[60px] w-[60px] rounded-full object-cover"
            src={song.cover}
            alt={`${song.name} cover`}
            width={60}
            height={60}
          />
          <div class="flex flex-col justify-center text-sm">
            <h2 class="font-semibold">{song.name}</h2>
            <h3>{song.artist}</h3>
            <div class="text-xs font-medium text-pink-600 opacity-0 transition-opacity ease-in group-hover:opacity-100">
              More Like this
            </div>
          </div>
        </div>

        <div class="flex w-1/4 items-center justify-center gap-2 self-center">
          {song.tags.map(() => {
            return (
              <>
                <span class="h-fit  rounded-2xl bg-white px-2 py-1 text-xs group-hover:bg-gray-100">
                  Chill
                </span>
              </>
            );
          })}
        </div>

        <div class="flex w-1/2 gap-6">
          <div class="flex w-full items-center justify-center">
            <PlayerWave src={song.src} preview={song.preview} id={song.id} />
          </div>
        </div>
      </div>
    </article>
  );
});
