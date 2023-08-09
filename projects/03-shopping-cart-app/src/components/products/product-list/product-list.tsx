import { component$ } from '@builder.io/qwik';
import { type Product } from '~/interfaces/products.interface';
import { ProductItem } from '../product-item/product-item';

interface Props {
  products: Product[];
}

export const ProductList = component$<Props>(({ products }) => {
  return (
    <ul class="py-5 grid place-items-center gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      {products.map((product) => (
        <li key={product.id}>
          <ProductItem product={product} />
        </li>
      ))}
    </ul>
  );
});
