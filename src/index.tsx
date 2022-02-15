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
import { ToastMessage } from './const';


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


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
