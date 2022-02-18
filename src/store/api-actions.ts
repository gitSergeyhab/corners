import axios from 'axios';
import { Action } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { setAddress, setCoordinates, setProducts, setProductsError } from './actions';
import { mockData } from '../mock/mock-data';
import { setProductToStorage } from '../utils/storage-utils';
import { formatCoordinates, getAddressFromResponse, getCoordinateFromResponse, getGeoCoordinatesString, getMapUrl, getStringAddressFromText } from '../utils/map-utils';
import { PRODUCT_URL, ToastMessage } from '../const';


export const fetchProducts = () =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const {data} =  await axios.get(PRODUCT_URL);
      const products = await JSON.parse(data);
      dispatch(setProducts(products));
      toast.success(ToastMessage.DataFromServer);
      setProductToStorage(products);
    } catch {
      dispatch(setProductsError(true));
      dispatch(setProducts(mockData));
      toast.warning(ToastMessage.ProductServerError);
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
        dispatch(setAddress(address));
        dispatch(setCoordinates(coordinate));
      }
    } catch {
      toast.error(ToastMessage.GeoCodeError);
    }
  };

export const fetchCoordinate = (address: string) =>
  async (dispatch: Dispatch<Action>) => {
    if (!address) {
      toast.warn('Введите адрес');
      return;
    }
    try {
      const addressString = getStringAddressFromText(address);
      const url = getMapUrl(addressString);
      const result = await axios.get(url);
      const coordinateString = getCoordinateFromResponse(result);
      const coordinates = formatCoordinates(coordinateString);
      if (coordinates && coordinates.length === 2) {
        const fixCoordinates = [coordinates[1], coordinates[0]]; // !!! в yandex maps and Geocode  разная последовательность координат!
        dispatch(setCoordinates(fixCoordinates));
        dispatch(setAddress(address));
      }
    } catch {
      toast.error(ToastMessage.GeoCodeError);
    }
  };
