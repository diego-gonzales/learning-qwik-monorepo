import { $, type QRL, component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './users-filters.css?inline';
import { useFilters } from '~/hooks/use-filters';
import { SORT_BY } from '~/consts';

interface UserFiltersProps {
  restoreUsers: QRL<() => void>;
}

export const UserFilters = component$<UserFiltersProps>(({ restoreUsers }) => {
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

      <button class="button" onClick$={restoreUsers}>
        Reset state
      </button>

      <input
        class="input"
        type="text"
        placeholder="Filter by country"
        value={filtersStore.countrySearch}
        onInput$={(_, element) => {
          filtersStore.countrySearch = element.value;
        }}
      />
    </section>
  );
});
