import { component$, useComputed$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { UserFilters } from '~/components/users/user-filters/user-filters';
import { UserTable } from '~/components/users/user-table/user-table';
import { SORT_BY } from '~/consts';
import { useFilters } from '~/hooks/use-filters';
import { getUsers } from '~/services/users.service';

export const useUsersLoader = routeLoader$(async () => {
  try {
    return await getUsers();
  } catch (error) {
    return [];
  }
});

export default component$(() => {
  const users = useUsersLoader();
  const filtersStore = useFilters();

  const filteredUsers = useComputed$(() => {
    if (filtersStore.sortBy === SORT_BY.COUNTRY) {
      return [...users.value].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country);
      });
    } else {
      return users.value;
    }
  });

  return (
    <>
      <header style={{ margin: '10px 0', textAlign: 'center' }}>
        <h1>Technical Test 55k</h1>
        <UserFilters />
      </header>

      <main style={{ width: '100%', overflowX: 'auto' }}>
        <UserTable users={filteredUsers.value} />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
