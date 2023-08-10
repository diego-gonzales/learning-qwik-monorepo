import { type QRL, createContextId } from '@builder.io/qwik';
import { type Category } from '~/enums/category.enum';
import { type Product } from '~/interfaces/products.interface';

export interface FiltersStore {
  maxPrice: number;
  category: Category;
  filterProducts: QRL<(this: FiltersStore, products: Product[]) => Product[]>;
}

export const FILTERS_CTX = createContextId<FiltersStore>('filters.context');
