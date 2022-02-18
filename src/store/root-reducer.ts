import { combineReducers } from '@reduxjs/toolkit';
import { formErrorReducer } from './form-error/form-error';
import { mapReducer } from './map-reducer/map-reducer';
import { productsReducer } from './products-reducer/products-reducer';

export const enum ReducerName {
  Products = 'Products',
  Map = 'Map',
  FormError = 'FormError'
}

export const rootReducer = combineReducers({
  [ReducerName.Products]: productsReducer,
  [ReducerName.Map]: mapReducer,
  [ReducerName.FormError]: formErrorReducer,
});

export type ReducerState = ReturnType<typeof rootReducer>;
