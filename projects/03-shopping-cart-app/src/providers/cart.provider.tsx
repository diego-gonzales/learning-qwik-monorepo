import {
  $,
  Slot,
  component$,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import { CART_CTX, type CartStore } from '~/contexts/cart.context';
import { type Product } from '~/interfaces/products.interface';

export const CartProvider = component$(() => {
  const cartStore = useStore<CartStore>({
    products: [],
    addToCart: $(function (this: CartStore, product: Product) {
      const productIndex = this.products.findIndex((p) => p.id === product.id);

      if (productIndex >= 0) {
        const newProducts = this.products.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              quantity: p.quantity! + 1,
            };
          }
          return p;
        });

        this.products = newProducts;
        return;
      }

      this.products.unshift({ ...product, quantity: 1 });
    }),
    removeOneFromCart: $(function (this: CartStore, product: Product) {
      if (product.quantity && product.quantity === 1) return;

      const newProducts = this.products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            quantity: p.quantity! - 1,
          };
        }
        return p;
      });

      this.products = newProducts;
    }),
    removeFromCart: $(function (this: CartStore, product: Product) {
      this.products = [...this.products].filter((p) => p.id !== product.id);
    }),
    totalToPay: $(function (this: CartStore) {
      return this.products.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity!;
      }, 0);
    }),
  });

  useContextProvider(CART_CTX, cartStore);

  return <Slot />;
});

// 📂 ESTA ES LA OTRA FORMA DE LOGRAR EL MISMO RESULTADO, pero lo hice la forma anterior siguiendo la documentacion de QWIK (https://qwik.builder.io/docs/components/state/#methods)

/*
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

  const totalToPay = useComputed$(() => {
    return cartStore.products.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity!;
    }, 0);
  });

  useContextProvider(CART_CTX, {
    cartStore,
    addToCart,
    removeOneFromCart,
    removeFromCart,
    totalToPay,
  });

  return <Slot />;
});
*/
