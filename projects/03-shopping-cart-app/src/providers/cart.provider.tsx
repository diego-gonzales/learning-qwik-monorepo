import {
  $,
  Slot,
  component$,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { CART_CTX } from '~/contexts/cart.context';
import { type Product } from '~/interfaces/products.interface';

export const CartProvider = component$(() => {
  const cart = useStore<Product[]>([]);

  const addToCart = $((product: Product) => {
    cart.push(product);
  });

  useContextProvider(CART_CTX, {
    cart,
    addToCart,
  });

  return <Slot />;
});
