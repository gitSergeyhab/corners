import { ReducerState } from '../store/root-reducer';

export type Product = {
  id: string,
  name: string,
  type: string,
  img: string,
  price: number,
  amount: number,
};

export type State = ReducerState;
