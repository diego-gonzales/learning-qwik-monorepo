import { $, useComputed$, useSignal } from '@builder.io/qwik';
import { getCatFact } from '~/services/cat-fact.service';
import { useImgLoadingCheck } from './use-loading-check';

const CAT_IMG_API = 'https://cataas.com/cat/says';

export const useCat = (catFact: string) => {
  const fact = useSignal(catFact);
  const firstWord = useComputed$(() => fact.value.split(' ')[0]);
  const catImgUrl = useComputed$(() => `${CAT_IMG_API}/${firstWord.value}`);
  const { setImgIsLoadedValue } = useImgLoadingCheck();

  const changeToNewFact = $(async () => {
    fact.value = await getCatFact();
    setImgIsLoadedValue(false);
  });

  return {
    fact: useComputed$(() => fact.value),
    word: useComputed$(() => firstWord.value),
    imgUrl: useComputed$(() => catImgUrl.value),
    changeToNewFact,
  };
};
