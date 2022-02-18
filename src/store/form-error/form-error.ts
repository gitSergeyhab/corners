import { createReducer } from '@reduxjs/toolkit';
import { setErrorEmail, setErrorPhone } from '../actions';


export type FormErrorSate = {
  isErrorEmail: boolean,
  isErrorPhone: boolean,
}

export const formErrorSate = {
  isErrorEmail: false,
  isErrorPhone: false,
};

export const formErrorReducer = createReducer(formErrorSate, (builder) => {
  builder
    .addCase(setErrorEmail, (state, action) => {state.isErrorEmail = action.payload;})
    .addCase(setErrorPhone, (state, action) => {state.isErrorPhone = action.payload;});
});
