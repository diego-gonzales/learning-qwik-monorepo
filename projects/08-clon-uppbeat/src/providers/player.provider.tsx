import {
  Slot,
  component$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { PLAYER_CTX, type PlayerContextProps } from "~/contexts/player.context";

export const PlayerProvider = component$(() => {
  const playerStore = useStore<PlayerContextProps>({
    src: "",
    isPlaying: false,
  });

  useContextProvider(PLAYER_CTX, playerStore);

  return <Slot />;
});
