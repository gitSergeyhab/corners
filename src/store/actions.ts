import { createAction } from '@reduxjs/toolkit';
import { Product } from '../types/types';

export const enum ActionType {
  SetProducts = 'products/SetProducts',
  SetProductsError = 'products/setProductsError',

}

export const setProducts = createAction(ActionType.SetProducts, (products: Product[]) => ({payload: products}));
export const setProductsError = createAction(ActionType.SetProductsError, (status: boolean) => ({payload: status}));
