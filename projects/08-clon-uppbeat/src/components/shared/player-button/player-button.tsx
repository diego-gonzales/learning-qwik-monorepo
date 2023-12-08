import { type PropFunction, component$ } from "@builder.io/qwik";
import { usePlayer } from "~/hooks/use-player";

interface PlayerButtonProps {
  handlePlay: PropFunction<() => void>;
  // isPlaying: boolean;
}

export const PlayerButton = component$<PlayerButtonProps>(({ handlePlay }) => {
  const { isPlaying } = usePlayer();

  return (
    <button
      class="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-pink-600 text-white transition active:scale-75"
      onClick$={handlePlay}
    >
      {isPlaying.value ? (
        <i class="fa-solid fa-pause"></i>
      ) : (
        <i class="fa-solid fa-play"></i>
      )}
    </button>
  );
});
