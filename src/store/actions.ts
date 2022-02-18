import { createAction } from '@reduxjs/toolkit';
import { Product } from '../types/types';

export const enum ActionType {
  SetProducts = 'products/SetProducts',
  SetProductsError = 'products/setProductsError',

  SetCoordinates = 'products/SetCoordinates',
  SetAddress = 'products/SetAddress',

  SetErrorEmail = 'form/SetErrorEmail',
  SetErrorPhone = 'form/SetErrorPhone',
}

export const setProducts = createAction(ActionType.SetProducts, (products: Product[]) => ({payload: products}));
export const setProductsError = createAction(ActionType.SetProductsError, (status: boolean) => ({payload: status}));

export const setCoordinates = createAction(ActionType.SetCoordinates, (coordinates: number[]) => ({payload: coordinates}));
export const setAddress = createAction(ActionType.SetAddress, (address: string) => ({payload: address}));

export const setErrorEmail  = createAction(ActionType.SetErrorEmail, (status: boolean) => ({payload: status}));
export const setErrorPhone  = createAction(ActionType.SetErrorPhone, (status: boolean) => ({payload: status}));
