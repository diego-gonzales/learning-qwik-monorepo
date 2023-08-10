import { component$, useComputed$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { ProductFilters } from '~/components/products/product-filters/product-filters';
import { ProductList } from '~/components/products/product-list/product-list';
import { Navbar } from '~/components/shared/navbar/navbar';
import { Category } from '~/enums/category.enum';
import { useFilters } from '~/hooks/use-filters';
import { getProducts } from '~/services/products.service';

export const useProductsLoader = routeLoader$(async () => {
  return await getProducts();
});

export default component$(() => {
  const products = useProductsLoader();
  const filtersStore = useFilters();

  const filteredProducts = useComputed$(() => {
    return products.value.filter(
      (product) =>
        product.price <= filtersStore.maxPrice &&
        (filtersStore.category === Category.ALL ||
          product.category === filtersStore.category)
    );
  });

  return (
    <>
      <header class="sticky top-0 left-0 z-10">
        <Navbar />
      </header>

      <main class="max-w-5xl mx-auto px-5">
        <ProductFilters />

        {filteredProducts.value.length > 0 ? (
          <ProductList products={filteredProducts.value} />
        ) : (
          <p class="text-center my-5">Product list is empty</p>
        )}
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
