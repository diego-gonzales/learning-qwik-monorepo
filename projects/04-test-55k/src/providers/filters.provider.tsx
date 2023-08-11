import {
  Slot,
  component$,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { SORT_BY } from '~/consts';
import { FILTERS_CTX, type FiltersStore } from '~/contexts/filters.context';

export const FiltersProvider = component$(() => {
  const filtersStore = useStore<FiltersStore>({
    countrySearch: '',
    sortBy: SORT_BY.NONE,
    isColoringTable: false,
  });

  useContextProvider(FILTERS_CTX, filtersStore);
  return <Slot />;
});
