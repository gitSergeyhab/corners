import axios from 'axios';
import { KEY_GEO_CODE_YANDEX } from '../const';

const baseURL = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${KEY_GEO_CODE_YANDEX}&geocode=`;

const createMapApi = () => {
  const api = axios.create({baseURL});
  return api;
};

export const mapApi = createMapApi();
