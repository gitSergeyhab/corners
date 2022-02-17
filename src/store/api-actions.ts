import { Action } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dispatch } from 'react';
import { setAddress, setCoordinates, setProducts, setProductsError } from './actions';
import { toast } from 'react-toastify';
import { mockData } from '../mock/mock-data';
import { setProductToStorage } from '../utils/storage-utils';
import { mapApi } from '../services/map-api';
import { formatCoordinates, getAddressFromResponse, getCoordinateFromResponse, getGeoCoordinatesString, getMapUrl, getStringAddressFromText } from '../utils/map-utils';

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

export const fetchAddress = (coordinate: number[]) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const coordinateText = getGeoCoordinatesString(coordinate);
      const url = getMapUrl(coordinateText);
      const result = await axios.get(url);
      const address = getAddressFromResponse(result);
      if (address) {
        console.log(coordinate, address);
        dispatch(setAddress(address));
        dispatch(setCoordinates(coordinate));
      }
    } catch {
      toast.error('Что-то не так...');
      // dispatch(setAddress('!!!'));
    }
  };

export const fetchCoordinate = (address: string) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const addressString = getStringAddressFromText(address);
      const url = getMapUrl(addressString);
      const result = await axios.get(url);
      const coordinateString = getCoordinateFromResponse(result);
      const coordinates = formatCoordinates(coordinateString);
      if (coordinates && coordinates.length === 2) {
        const fixCoordinates = [coordinates[1], coordinates[0]]; // !!! в yandex maps and Grocode  разная последовательность координат!
        dispatch(setCoordinates(fixCoordinates));
        dispatch(setAddress(address));
        console.log(fixCoordinates);
      }

    } catch {
      toast.error('Что-то не так...');
      // dispatch(setAddress('!!!'));
    }
  };
