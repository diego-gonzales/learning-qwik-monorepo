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
  const cartStore = useStore<{ products: Product[] }>({
    products: [],
  });

  const addToCart = $((product: Product) => {
    const productIndex = cartStore.products.findIndex(
      (p) => p.id === product.id
    );

    if (productIndex >= 0) {
      const newProducts = cartStore.products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            quantity: p.quantity! + 1,
          };
        }
        return p;
      });

      cartStore.products = newProducts;
      return;
    }

    cartStore.products.unshift({ ...product, quantity: 1 });
  });

  const removeOneFromCart = $((product: Product) => {
    if (product.quantity && product.quantity === 1) return;

    const newProducts = cartStore.products.map((p) => {
      if (p.id === product.id) {
        return {
          ...p,
          quantity: p.quantity! - 1,
        };
      }
      return p;
    });

    cartStore.products = newProducts;
  });

  const removeFromCart = $((product: Product) => {
    cartStore.products = [...cartStore.products].filter(
      (p) => p.id !== product.id
    );
  });

  useContextProvider(CART_CTX, {
    cartStore,
    addToCart,
    removeOneFromCart,
    removeFromCart,
  });

  return <Slot />;
});
