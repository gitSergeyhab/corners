import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import App from './components/app/app';
import { fetchProducts } from './store/api-actions';
import { rootReducer } from './store/root-reducer';
import { getProductFromStorage } from './utils/storage-utils';
import { setProducts } from './store/actions';
import { ToastMessage } from './const';

import 'react-toastify/dist/ReactToastify.css';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const storageProducts = getProductFromStorage();

if (storageProducts) {
  store.dispatch(setProducts(storageProducts));
  toast.success(ToastMessage.DataFromStorage);
  if (!storageProducts.length) {
    toast.warn(ToastMessage.NoData);
  }
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
