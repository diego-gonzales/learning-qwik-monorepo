import { $, component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './users-filters.css?inline';
import { useFilters } from '~/hooks/use-filters';
import { type SortBy, SORT_BY } from '~/consts';

export const UserFilters = component$(() => {
  useStylesScoped$(styles);
  const filtersStore = useFilters();

  const toggleSortByCountry = $(() => {
    filtersStore.sortBy === SORT_BY.COUNTRY
      ? (filtersStore.sortBy = SORT_BY.NONE)
      : (filtersStore.sortBy = SORT_BY.COUNTRY);
  });

  return (
    <section style={{ margin: '20px 0' }}>
      <button
        class="button"
        onClick$={() => {
          filtersStore.isColoringTable = !filtersStore.isColoringTable;
        }}
      >
        {filtersStore.isColoringTable ? 'Not coloring' : 'Coloring'}
      </button>
      <button class="button" onClick$={() => toggleSortByCountry()}>
        {filtersStore.sortBy !== SORT_BY.COUNTRY
          ? 'Sort by country'
          : 'Not sort by country'}
      </button>
      <button class="button">Reset state</button>
      <input class="input" type="text" placeholder="Filter by country" />
    </section>
  );
});
