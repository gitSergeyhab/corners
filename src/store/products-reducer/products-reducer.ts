import { createReducer } from '@reduxjs/toolkit';
import { Product } from '../../types/types';
import { setProducts, setProductsError } from '../actions';

type ProductsState = {
  products: Product[],
  isLoading: boolean,
  isError: boolean,
}

const productsState: ProductsState = {
  products: [],
  isLoading: true,
  isError: false,
};


export const productsReducer = createReducer(productsState, (builder) => {
  builder
    .addCase(setProducts, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.isError = false;
    })
    .addCase(setProductsError, (state, action) => {
      state.isError = action.payload;
    });
});
