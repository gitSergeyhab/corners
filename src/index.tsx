import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { fetchProducts } from './store/api-actions';
import { rootReducer } from './store/root-reducer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProductFromStorage } from './utils/storage-utils';
import { setProducts, setProductsError } from './store/actions';
import { KEY_GEO_CODE_YANDEX, ToastMessage } from './const';
import axios from 'axios';
import { formatCoordinates, getCoordinateFromResponse, getGeoCoordinatesString } from './utils/map-utils';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const storageProducts = getProductFromStorage();

if (storageProducts) {
  store.dispatch(setProducts(storageProducts));
  toast.success(ToastMessage.DataFromStorage);
  // if (!storageProducts.length) {
  //   toast.success('Данные из локалстоража удалены, для получения данных с "сервера" обновите страницу');
  // }
} else {
  store.dispatch(fetchProducts());
}


// https://geocode-maps.yandex.ru/1.x/?apikey=ваш API-ключ&geocode=37.611347,55.760241


// axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${'b3674886-ae1b-4e37-91a6-e5c47b6376c5'}&geocode=Тула,+пос.Менделеевский,улица+Л.Толстого,д.,11`)
//   .then((w) => console.log(formatCoordinates(getCoordinateFromResponse(w), [0,0])));


// axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${'b3674886-ae1b-4e37-91a6-e5c47b6376c5'}&geocode=37.580526,54.132699`)
//   .then((w) => console.log(w, getAddressFromResponse(w)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
