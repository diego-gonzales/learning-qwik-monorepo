import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './users-filters.css?inline';

export const UserFilters = component$(() => {
  useStylesScoped$(styles);

  return (
    <section style={{ margin: '10px 0' }}>
      <button class="button">Paint rows</button>
      <button class="button">Sort by country</button>
      <button class="button">Reset state</button>
      <input class="input" type="text" placeholder="Filter by country" />
    </section>
  );
});
