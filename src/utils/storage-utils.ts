import { Product } from '../types/types';

const PRODUCT_KEY = 'PRODUCT_KEY';

export const getProductFromStorage = () => {
  const data = localStorage.getItem(PRODUCT_KEY);
  if (!data) {
    return null;
  }
  return JSON.parse(data) as Product[];
};

export const setProductToStorage = (products: Product[]) =>
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
