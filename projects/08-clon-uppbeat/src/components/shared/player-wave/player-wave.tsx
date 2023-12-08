import {
  type NoSerialize,
  component$,
  useStore,
  useVisibleTask$,
  noSerialize,
  useSignal,
} from "@builder.io/qwik";
import WaveSurfer from "wavesurfer.js";
import { usePlayer } from "~/hooks/use-player";

interface PlayerWaveProps {
  src: string;
  preview: string;
  id: number;
}

export const PlayerWave = component$<PlayerWaveProps>(({ src, preview }) => {
  // const waveId = `wave_${id}`;
  const waveRef = useSignal<HTMLElement>();
  const store = useStore<{ waveSurferInstance: NoSerialize<WaveSurfer> }>({
    waveSurferInstance: undefined,
  });
  const { updateSrc } = usePlayer();

  useVisibleTask$(({ cleanup }) => {
    const wavesurfer = WaveSurfer.create({
      // container: `#${waveId}`,
      container: waveRef.value!,
      waveColor: "#D1D5DB",
      progressColor: "#F472B6",
      barWidth: 2,
      barRadius: 3,
      cursorWidth: 1,
      cursorColor: "#F472B6",
      height: 70,
      normalize: true,
      fillParent: true,
      interact: false,
      url: preview,
    });

    store.waveSurferInstance = noSerialize(wavesurfer);

    store.waveSurferInstance?.setMuted(true);

    store.waveSurferInstance?.on("click", () => {
      store.waveSurferInstance?.play();
    });

    cleanup(() => store.waveSurferInstance?.destroy());
  });

  return (
    <div class="h-[70px] w-full" onClick$={() => updateSrc(src)}>
      <div ref={waveRef}></div>
    </div>
  );
});
