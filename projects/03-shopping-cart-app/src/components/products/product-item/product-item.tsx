import { component$ } from '@builder.io/qwik';
import { AddToCartIcon } from '~/components/icons/icons';
import { useCart } from '~/hooks/use-cart';
import { type Product } from '~/interfaces/products.interface';

interface Props {
  product: Product;
}

export const ProductItem = component$<Props>(({ product }) => {
  const { addToCart } = useCart();

  return (
    <div class="card bg-neutral shadow-xl">
      <figure>
        <img
          class="w-full aspect-video object-cover"
          src={product.thumbnail}
          alt={product.title}
          width={230}
          height={130}
        />
      </figure>
      <div class="card-body">
        <p class="text-center">
          <span class="font-bold">{product.title}</span> - ${product.price}
        </p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary btn-sm"
            onClick$={() => addToCart(product)}
          >
            <AddToCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
});
