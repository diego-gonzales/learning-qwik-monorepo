import { type QRL, createContextId } from '@builder.io/qwik';
import { type Product } from '~/interfaces/products.interface';

export interface CartContextProps {
  cart: Product[];
  addToCart: QRL<(product: Product) => void>;
}

export const CART_CTX = createContextId<CartContextProps>('cart.context');
