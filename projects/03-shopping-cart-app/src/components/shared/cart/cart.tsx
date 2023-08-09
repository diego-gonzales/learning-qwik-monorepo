import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { CartIcon, TrashIcon } from '~/components/icons/icons';
import { useCart } from '~/hooks/use-cart';

export const Cart = component$(() => {
  const { cart } = useCart();
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
            <span class="badge badge-sm indicator-item">{cart.length}</span>
          </div>
        </label>
      </div>

      <aside class="drawer-side z-20">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <section class="p-0 w-72 md:w-80 h-screen bg-neutral text-base-content">
          <ul class="flex flex-col gap-2 px-2 py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            {cart.map((product) => (
              <li
                key={product.id}
                class="flex items-center gap-2 border-[1px] p-2 rounded-md"
              >
                <div class="flex flex-col items-center gap-1">
                  <button class="btn btn-neutral btn-xs">+</button>
                  <span>1</span>
                  <button class="btn btn-neutral btn-xs">-</button>
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

                <button class="btn btn-error btn-sm btn-circle">
                  <TrashIcon />
                </button>
              </li>
            ))}
          </ul>

          <div class="absolute bottom-0 w-full text-center border-t-[1px] h-[120px] flex flex-col justify-evenly items-center">
            <span class="font-bold text-lg">{cart.length} items</span>
            <span class="text-info">Subtotal: $999</span>
            <label for="my-drawer-4" class="btn btn-primary btn-xs w-1/2">
              Close
            </label>
          </div>
        </section>
      </aside>
    </div>
  );
});
