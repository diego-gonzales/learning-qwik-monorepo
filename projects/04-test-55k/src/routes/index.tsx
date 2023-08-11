import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { UserFilters } from '~/components/users/user-filters/user-filters';
import { UserTable } from '~/components/users/user-table/user-table';
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

  return (
    <>
      <header style={{ margin: '10px 0', textAlign: 'center' }}>
        <h1>Technical Test 55k</h1>
        <UserFilters />
      </header>

      <main style={{ width: '100%', overflowX: 'auto' }}>
        <UserTable users={users.value} />
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
