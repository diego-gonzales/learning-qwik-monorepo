import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Header = component$(() => {
  return (
    <header class="py-4 px-8 border-b">
      <nav class="flex gap-4 items-center">
        <img src="/logo.gif" alt="Hacker news logo" width={18} height={18} />
        <Link href="/" class="text-lg">
          Hacker News
        </Link>
      </nav>
    </header>
  );
});
