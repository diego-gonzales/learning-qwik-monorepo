import { createContextId } from '@builder.io/qwik';

export interface FiltersStore {
  countrySearch: string;
  sortBy: string;
  isColoringTable: boolean;
}

export const FILTERS_CTX = createContextId<FiltersStore>('filters.context');
