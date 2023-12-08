import { createContextId } from "@builder.io/qwik";
import { PLAYER_CTX_KEY } from "~/constants";

export interface PlayerContextProps {
  src: string;
  isPlaying: boolean;
}

export const PLAYER_CTX = createContextId<PlayerContextProps>(PLAYER_CTX_KEY);
