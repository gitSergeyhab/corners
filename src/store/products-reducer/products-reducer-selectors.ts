import { Product, State } from '../../types/types';
import { ReducerName } from '../root-reducer';


export const getProducts = (state: State): Product[] => state[ReducerName.Products].products;
