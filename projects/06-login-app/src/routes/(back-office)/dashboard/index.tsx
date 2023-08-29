import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { USER_LOCAL_STORAGE_KEY } from '~/constants';
import { type User } from '~/interfaces/user.interface';

export const useUserLoader = routeLoader$(({ sharedMap }) => {
  return JSON.parse(sharedMap.get(USER_LOCAL_STORAGE_KEY)) as User;
});

export default component$(() => {
  const user = useUserLoader();

  return (
    <div>
      <h2>Dashboard</h2>
      <section>
        <pre>
          <code>{JSON.stringify(user.value, null, 4)}</code>
        </pre>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Dashboard',
  meta: [
    {
      name: 'description',
      content: 'Dashboard page',
    },
    {
      name: 'keywords',
      content: 'dashboard, page',
    },
  ],
};
