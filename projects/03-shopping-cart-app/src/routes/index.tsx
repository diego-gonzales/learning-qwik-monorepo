import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { ProductFilters } from '~/components/products/product-filters/product-filters';
import { ProductList } from '~/components/products/product-list/product-list';
import { Navbar } from '~/components/shared/navbar/navbar';
import { CartProvider } from '~/providers/cart.provider';
import { getProducts } from '~/services/products.service';

export const useProductsLoader = routeLoader$(async () => {
  return await getProducts();
});

export default component$(() => {
  const products = useProductsLoader();

  return (
    <CartProvider>
      <header>
        <Navbar />
      </header>

      <main class="max-w-5xl mx-auto px-5">
        <ProductFilters />
        <ProductList products={products.value} />
      </main>
    </CartProvider>
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
