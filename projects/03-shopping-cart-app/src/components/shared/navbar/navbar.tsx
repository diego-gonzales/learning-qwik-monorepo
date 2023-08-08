import { component$ } from '@builder.io/qwik';
import { CartIcon } from '~/components/icons/cart-icon';

export const Navbar = component$(() => {
  return (
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Qwik Shop</a>
      </div>

      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabIndex={0} class="btn btn-ghost btn-circle">
            <div class="indicator">
              <CartIcon />
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
