import {
  Slot,
  component$,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { FILTERS_CTX } from '~/contexts/filters.context';

export const FiltersProvider = component$(() => {
  const filtersStore = useStore({
    countrySearch: '',
    sortBy: '',
    isColoringTable: false,
  });

  useContextProvider(FILTERS_CTX, filtersStore);
  return <Slot />;
});
