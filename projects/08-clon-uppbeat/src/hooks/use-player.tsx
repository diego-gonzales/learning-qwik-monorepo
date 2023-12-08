import { $, useComputed$, useContext } from "@builder.io/qwik";
import { PLAYER_CTX } from "~/contexts/player.context";

export const usePlayer = () => {
  const playerStore = useContext(PLAYER_CTX);

  const updateSrc = $((src: string) => (playerStore.src = src));
  const updateIsPlaying = $(
    (isPlaying: boolean) => (playerStore.isPlaying = isPlaying),
  );

  return {
    src: useComputed$(() => playerStore.src),
    isPlaying: useComputed$(() => playerStore.isPlaying),
    updateSrc,
    updateIsPlaying,
  };
};
