import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './users-filters.css?inline';
import { useFilters } from '~/hooks/use-filters';

export const UserFilters = component$(() => {
  useStylesScoped$(styles);
  const filtersStore = useFilters();

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
      <button class="button">Sort by country</button>
      <button class="button">Reset state</button>
      <input class="input" type="text" placeholder="Filter by country" />
    </section>
  );
});
