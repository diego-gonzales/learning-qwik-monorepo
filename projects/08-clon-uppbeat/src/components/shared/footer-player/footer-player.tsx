import type { NoSerialize } from "@builder.io/qwik";
import {
  $,
  component$,
  noSerialize,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import WaveSurfer from "wavesurfer.js";
import { usePlayer } from "~/hooks/use-player";
import { PlayerButton } from "../player-button/player-button";

export const FooterPlayer = component$(() => {
  const store = useStore<{ waveSurferInstance: NoSerialize<WaveSurfer> }>({
    waveSurferInstance: undefined,
  });

  const { src, updateIsPlaying } = usePlayer();

  useVisibleTask$(() => {
    const wavesurfer = WaveSurfer.create({
      container: "#global-player",
      waveColor: "#D1D5DB",
      progressColor: "#F472B6",
      barWidth: 2,
      barRadius: 3,
      cursorWidth: 1,
      cursorColor: "#F472B6",
      height: 50,
      normalize: true,
      fillParent: true,
    });

    store.waveSurferInstance = noSerialize(wavesurfer);

    store.waveSurferInstance?.on("ready", () => {
      store.waveSurferInstance?.setTime(10);
      store.waveSurferInstance?.play();
      updateIsPlaying(true);
    });
  });

  useVisibleTask$(({ track }) => {
    track(() => src.value);

    if (src.value && store.waveSurferInstance) {
      updateIsPlaying(false);
      store.waveSurferInstance.stop();
      store.waveSurferInstance.load(src.value);
    }
  });

  const handlePlay = $(() => {
    if (store.waveSurferInstance) {
      store.waveSurferInstance.playPause();
      updateIsPlaying(store.waveSurferInstance.isPlaying());
    }
  });

  return (
    <footer class="fixed bottom-0 left-0 z-10 flex h-[64px] w-full justify-between border-t border-solid bg-white">
      <section class="flex w-1/6 items-center justify-center ">
        <PlayerButton handlePlay={handlePlay} />
      </section>
      <section class="flex w-full content-center items-center justify-center ">
        <div class="w-full" id="global-player"></div>
      </section>
    </footer>
  );
});
