import { component$, useComputed$ } from '@builder.io/qwik';
import { AddToCartIcon, RemoveFromCart } from '~/components/icons/icons';
import { useCart } from '~/hooks/use-cart';
import { type Product } from '~/interfaces/products.interface';

interface Props {
  product: Product;
}

export const ProductItem = component$<Props>(({ product }) => {
  const { products, addToCart, removeFromCart } = useCart();

  const productIsInCart = useComputed$(() => {
    return products.some((p) => p.id === product.id);
  });

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
            title={productIsInCart.value ? 'Remove from cart' : 'Add to cart'}
            class={[
              'btn',
              productIsInCart.value ? 'btn-error' : 'btn-primary',
              'btn-sm',
            ]}
            onClick$={() =>
              productIsInCart.value
                ? removeFromCart(product)
                : addToCart(product)
            }
          >
            {productIsInCart.value ? <RemoveFromCart /> : <AddToCartIcon />}
          </button>
        </div>
      </div>
    </div>
  );
});
