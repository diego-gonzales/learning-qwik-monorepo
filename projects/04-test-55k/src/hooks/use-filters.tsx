import { useContext } from '@builder.io/qwik';
import { FILTERS_CTX } from '~/contexts/filters.context';

export const useFilters = () => {
  return useContext(FILTERS_CTX);
};
