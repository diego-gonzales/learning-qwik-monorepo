import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { CartIcon } from '~/components/icons/icons';
import { useCart } from '~/hooks/use-cart';
import { CartItem } from '../cart-item/cart-item';

export const CartList = component$(() => {
  const { products, totalToPay } = useCart();
  const cartIsOpen = useSignal(false);

  useVisibleTask$(({ track }) => {
    const value = track(() => cartIsOpen.value);

    if (value) document.body.classList.add('cartIsOpen');
    else document.body.classList.remove('cartIsOpen');
  });

  return (
    <div class="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        bind:checked={cartIsOpen}
        class="drawer-toggle"
      />
      <div class="drawer-content">
        <label for="my-drawer-4" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <CartIcon />
            <span class="badge badge-sm indicator-item">{products.length}</span>
          </div>
        </label>
      </div>

      <aside class="drawer-side z-20">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <section class="p-0 w-72 md:w-80 h-screen bg-neutral text-base-content">
          <ul class="flex flex-col gap-2 px-2 py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            {products.map((product) => (
              <li key={product.id}>
                <CartItem product={product} />
              </li>
            ))}
          </ul>

          <div class="absolute bottom-0 w-full text-center border-t-[1px] h-[120px] flex flex-col justify-evenly items-center">
            <span class="font-bold text-lg">{products.length} items</span>
            {/* <span class="text-info">Subtotal: $ {totalToPay.value}</span> */}
            <span class="text-info">Subtotal: $ {totalToPay()}</span>
            <label for="my-drawer-4" class="btn btn-primary btn-xs w-1/2">
              Close
            </label>
          </div>
        </section>
      </aside>
    </div>
  );
});
