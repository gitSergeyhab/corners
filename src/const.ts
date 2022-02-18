export const PRODUCT_KEY = 'PRODUCT_KEY';

export const PRODUCT_URL = 'https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c';

export const KEY_GEO_CODE_YANDEX = 'b3674886-ae1b-4e37-91a6-e5c47b6376c5';

export const ToastMessage = {
  DataFromStorage: 'Сайт был перезагружен, данные о товарах взяты из localStorage',
  DataFromServer: 'Данные о товарах взяты с "сервера"',
  ProductServerError: 'не удалось загрузить данные с "сервера", используются моковые данные',
  NoData: `Вы удалили все товары... Чтобы вернуть их на страницу, очистите localStorage (${PRODUCT_KEY}) и перезагрузите страницу`,
  NoAddress: 'Введите адрес',
  GeoCodeError: 'Геокод не хочет делиться данными, попробуйте позже',
  InvalidForm: 'Введенные данные некорректны',
};

export const enum ScreenType {
  Desktop = 'desktop',
  Mobile = 'mobile',
}
