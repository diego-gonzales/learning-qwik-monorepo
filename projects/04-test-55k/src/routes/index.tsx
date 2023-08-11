import { $, component$, useComputed$, useStore } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { UserFilters } from '~/components/users/user-filters/user-filters';
import { UserTable } from '~/components/users/user-table/user-table';
import { SORT_BY } from '~/consts';
import { useFilters } from '~/hooks/use-filters';
import { type User } from '~/interfaces/users.inteface';
import { getUsers } from '~/services/users.service';

export const useUsersLoader = routeLoader$(async () => {
  try {
    return await getUsers();
  } catch (error) {
    return [];
  }
});

export default component$(() => {
  const initialUsers = useUsersLoader();
  const filtersStore = useFilters();

  const myStore = useStore<{ users: User[] }>({
    users: initialUsers.value,
  });

  const sortedUsers = useComputed$(() => {
    if (filtersStore.sortBy === SORT_BY.NONE) return myStore.users;

    const compareFn: Record<string, (user: User) => string> = {
      [SORT_BY.COUNTRY]: (user) => user.location.country,
      [SORT_BY.NAME]: (user) => user.name.first,
      [SORT_BY.LASTNAME]: (user) => user.name.last,
    };

    const extractProperty = compareFn[filtersStore.sortBy];

    return [...myStore.users].sort((a, b) =>
      extractProperty(a).localeCompare(extractProperty(b))
    );
  });

  const filteredUsers = useComputed$(() => {
    if (filtersStore.countrySearch.trim().length === 0)
      return sortedUsers.value;

    return sortedUsers.value.filter((user) =>
      user.location.country.toLowerCase().includes(filtersStore.countrySearch)
    );
  });

  const removeUser = $((userId: string) => {
    const newUsers = myStore.users.filter((user) => user.login.uuid !== userId);
    myStore.users = newUsers;
  });

  const restoreUsers = $(() => {
    myStore.users = initialUsers.value;
  });

  return (
    <>
      <header style={{ margin: '10px 0', textAlign: 'center' }}>
        <h1>Technical Test 55k</h1>
        <UserFilters restoreUsers={restoreUsers} />
      </header>

      <main style={{ width: '100%', overflowX: 'auto' }}>
        <UserTable users={filteredUsers.value} removeUser={removeUser} />
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
