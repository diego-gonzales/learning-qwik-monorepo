import { type QRL, createContextId } from '@builder.io/qwik';
import { type Product } from '~/interfaces/products.interface';

export interface CartStore {
  products: Product[];
  addToCart: QRL<(this: CartStore, product: Product) => void>;
  removeOneFromCart: QRL<(this: CartStore, product: Product) => void>;
  removeFromCart: QRL<(this: CartStore, product: Product) => void>;
  totalToPay: QRL<(this: CartStore) => number>;
}

export const CART_CTX = createContextId<CartStore>('cart.context');

// 📂 ESTA ES LA INTERFAZ USADA PARA LA OTRA FORMA DE LOGRAR EL MISMO RESULTADO
/*
export interface CartContextProps {
  cartStore: {
    products: Product[];
  };
  addToCart: QRL<(product: Product) => void>;
  removeOneFromCart: QRL<(product: Product) => void>;
  removeFromCart: QRL<(product: Product) => void>;
  totalToPay: Readonly<Signal<number>>;
}

export const CART_CTX = createContextId<CartContextProps>('cart.context');
*/
