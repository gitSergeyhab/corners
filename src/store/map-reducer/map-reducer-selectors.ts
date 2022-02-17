import { State } from '../../types/types';
import { ReducerName } from '../root-reducer';

export const getAddress = (state: State): string => state[ReducerName.Map].address;
export const getCoordinates = (state: State): number[] => state[ReducerName.Map].coordinates;
