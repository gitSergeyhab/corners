import { State } from '../../types/types';
import { ReducerName } from '../root-reducer';

export const getEmailErrorStatus = (state: State): boolean => state[ReducerName.FormError].isErrorEmail;
export const getPhoneErrorStatus = (state: State): boolean => state[ReducerName.FormError].isErrorPhone;
