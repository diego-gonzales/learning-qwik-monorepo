import { useContext } from '@builder.io/qwik';
import { CART_CTX } from '~/contexts/cart.context';

export const useCart = () => {
  return useContext(CART_CTX);
};
