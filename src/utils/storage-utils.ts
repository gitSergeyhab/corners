import { PRODUCT_KEY } from '../const';
import { Product } from '../types/types';


export const getProductFromStorage = () => {
  const data = localStorage.getItem(PRODUCT_KEY);
  if (!data) {
    return null;
  }
  return JSON.parse(data) as Product[];
};

export const setProductToStorage = (products: Product[]) =>
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
