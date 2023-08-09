import { component$ } from '@builder.io/qwik';
import { Cart } from '../cart/cart';

export const Navbar = component$(() => {
  return (
    <div class="navbar bg-neutral text-neutral-content">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Qwik Shop</a>
      </div>

      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <Cart />
        </div>
      </div>
    </div>
  );
});
