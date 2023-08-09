import { component$ } from '@builder.io/qwik';
import { TrashIcon } from '~/components/icons/icons';
import { useCart } from '~/hooks/use-cart';
import { type Product } from '~/interfaces/products.interface';

export const CartItem = component$(({ product }: { product: Product }) => {
  const { addToCart, removeOneFromCart, removeFromCart } = useCart();

  return (
    <div class="flex items-center gap-2 border-[1px] p-2 rounded-md">
      <div class="flex flex-col items-center gap-1">
        <button
          class="btn btn-neutral btn-xs"
          onClick$={() => addToCart(product)}
        >
          +
        </button>
        <span>{product.quantity}</span>
        <button
          class="btn btn-neutral btn-xs"
          onClick$={() => removeOneFromCart(product)}
          disabled={product.quantity! <= 1}
        >
          -
        </button>
      </div>

      <img
        class="w-14 h-14 aspect-video object-cover"
        src={product.thumbnail}
        alt={product.title}
        width={60}
        height={60}
      />

      <div class="w-full">
        <p class="text-sm uppercase">{product.title}</p>
        <small class="text-xs">$ {product.price}</small>
      </div>

      <button
        class="btn btn-error btn-sm btn-circle"
        onClick$={() => removeFromCart(product)}
      >
        <TrashIcon />
      </button>
    </div>
  );
});
