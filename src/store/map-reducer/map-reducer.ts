import { createReducer } from '@reduxjs/toolkit';
import { setAddress, setCoordinates } from '../actions';


const DEFAULT_ADDRESS = 'г. Санкт-Петербург, пр. Просвещения, д. 99, кв. 152';

const DEFAULT_COORDINATES = [60.033113, 30.428661];


export type MapState = {
  coordinates: number[],
  address: string,
}

export const mapSate = {
  coordinates: DEFAULT_COORDINATES,
  address: DEFAULT_ADDRESS,
};

export const mapReducer = createReducer(mapSate, (builder) => {
  builder
    .addCase(setCoordinates, (state, action) => {state.coordinates = action.payload;})
    .addCase(setAddress, (state, action) => {state.address = action.payload;});
});
