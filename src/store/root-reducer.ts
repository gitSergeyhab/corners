import { combineReducers } from '@reduxjs/toolkit';
import { mapReducer } from './map-reducer/map-reducer';
import { productsReducer } from './products-reducer/products-reducer';

export const enum ReducerName {
  Products = 'Products',
  Map = 'Map',
}

export const rootReducer = combineReducers({
  [ReducerName.Products]: productsReducer,
  [ReducerName.Map]: mapReducer,

});

export type ReducerState = ReturnType<typeof rootReducer>;
