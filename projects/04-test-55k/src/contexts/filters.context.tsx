import { createContextId } from '@builder.io/qwik';
import { type SortBy } from '~/consts';

export interface FiltersStore {
  countrySearch: string;
  sortBy: SortBy;
  isColoringTable: boolean;
}

export const FILTERS_CTX = createContextId<FiltersStore>('filters.context');
