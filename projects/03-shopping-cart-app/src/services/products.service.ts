import productsData from '~/mocks/products.json';

export const getProducts = async () => {
  return productsData.products;
};
