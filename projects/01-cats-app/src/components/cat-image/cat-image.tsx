import { component$ } from '@builder.io/qwik';
import { useImgLoadingCheck } from '~/hooks/use-loading-check';

export interface Props {
  imgUrl: string;
  word: string;
}

export const CatImage = component$<Props>(({ imgUrl, word }) => {
  const { imgIsLoaded, setImgIsLoadedValue } = useImgLoadingCheck();

  return (
    <figure>
      <img
        class={['object-cover', { hidden: !imgIsLoaded.value }]}
        src={imgUrl}
        alt={`Random image for the '${word}' word`}
        width="300"
        height="400"
        onLoad$={() => setImgIsLoadedValue(true)}
      />
      {!imgIsLoaded.value && (
        <div class="w-[300px] h-[400px] flex justify-center items-center italic">
          Loading image...
        </div>
      )}
    </figure>
  );
});
