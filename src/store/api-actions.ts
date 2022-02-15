import { Action } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dispatch } from 'react';
import { setProducts, setProductsError } from './actions';
import { toast } from 'react-toastify';
import { mockData } from '../mock/mock-data';
import { setProductToStorage } from '../utils/storage-utils';

const URL = 'https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c';


export const fetchProducts = () =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const {data} =  await axios.get(URL);
      const products = await JSON.parse(data);
      dispatch(setProducts(products));
      toast.success(`загружены данные с "${URL}"`);
      setProductToStorage(products);
    } catch {
      dispatch(setProductsError(true));
      dispatch(setProducts(mockData));
      toast.warning(`не удалось загрузить данные с "${URL}", используются моковые данные`);
      setProductToStorage(mockData);
    }
  };


