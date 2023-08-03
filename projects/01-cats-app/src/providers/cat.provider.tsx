import {
  Slot,
  component$,
  useContextProvider,
  useSignal,
} from '@builder.io/qwik';
import { CAT_CTX } from '~/contexts/cat.context';

export const CatProvider = component$(() => {
  const imgIsLoaded = useSignal(false);

  useContextProvider(CAT_CTX, imgIsLoaded);

  return <Slot />;
});
