import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <h2>Users</h2>;
});

export const head: DocumentHead = {
  title: 'Users',
  meta: [
    {
      name: 'description',
      content: 'Users page',
    },
    {
      name: 'keywords',
      content: 'users, page',
    },
  ],
};
