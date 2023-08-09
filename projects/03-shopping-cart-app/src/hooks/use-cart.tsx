import { useContext } from '@builder.io/qwik';
import { CART_CTX } from '~/contexts/cart.context';

export const useCart = () => {
  // const context = useContext(CART_CTX);
  // if (context === undefined) throw new Error('useCart must be used within a CartProvider');

  return useContext(CART_CTX);
};
