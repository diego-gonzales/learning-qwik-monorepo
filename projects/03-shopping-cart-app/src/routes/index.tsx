import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ProductFilters } from '~/components/products/product-filters/product-filters';
import { ProductList } from '~/components/products/product-list/product-list';
import { Navbar } from '~/components/shared/navbar/navbar';

export default component$(() => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main class="max-w-5xl mx-auto px-5">
        <ProductFilters />
        <ProductList />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Shopping App',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
