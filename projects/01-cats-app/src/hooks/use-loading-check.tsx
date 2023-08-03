import { $, useComputed$, useContext } from '@builder.io/qwik';
import { CAT_CTX } from '~/contexts/cat.context';

export const useImgLoadingCheck = () => {
  const imgIsLoaded = useContext(CAT_CTX);

  const setImgIsLoadedValue = $((value: boolean) => {
    imgIsLoaded.value = value;
  });

  return {
    imgIsLoaded: useComputed$(() => imgIsLoaded.value),
    setImgIsLoadedValue,
  };
};
