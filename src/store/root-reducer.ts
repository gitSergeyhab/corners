import { combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './products-reducer/products-reducer';

export const enum ReducerName {
  Products = 'Products',
}

export const rootReducer = combineReducers({
  [ReducerName.Products]: productsReducer,
});

export type ReducerState = ReturnType<typeof rootReducer>;
