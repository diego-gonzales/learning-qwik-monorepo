import {
  $,
  Slot,
  component$,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { FILTERS_CTX, type FiltersStore } from '~/contexts/filters.context';
import { Category } from '~/enums/category.enum';
import { type Product } from '~/interfaces/products.interface';

export const FiltersProvider = component$(() => {
  const filtersStore = useStore<FiltersStore>({
    maxPrice: 1800,
    category: Category.ALL,
    // ✨✨ Se podría usar de esta forma pero por alguna razón devuelve una promesa al usar este método, creo que podría ser debido a que en el routeLouder donde se hace el llamado de los productos se está usando un async await, y esos products son pasados como parámetro aquí (es por eso que se usó un useComputed$() dentro del index.tsx para filtrar los productos)
    filterProducts: $(function (this: FiltersStore, products: Product[]) {
      return products.filter(
        (product) =>
          product.price <= this.maxPrice &&
          (this.category === Category.ALL || product.category === this.category)
      );
    }),
  });

  useContextProvider(FILTERS_CTX, filtersStore);

  return <Slot />;
});
