import { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ScreenType, ToastMessage } from '../../../const';
import { getEmailErrorStatus, getPhoneErrorStatus } from '../../../store/form-error/form-error-selectors';
import { getProducts } from '../../../store/products-reducer/products-reducer-selectors';
import { getJSONFromForm } from '../../../utils/data-utils';
import FormSubmit from '../form-submit/form-submit';
import Login from '../login/login';
import Products from '../products/products';
import RegistrationMap from '../registration-map/registration-map';
import ResultPrice from '../result-price/result-price';


export default function Form() {

  const isErrorEmail = useSelector(getEmailErrorStatus);
  const isErrorPhone = useSelector(getPhoneErrorStatus);

  const products = useSelector(getProducts);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {

    evt.preventDefault();
    if (isErrorEmail || isErrorPhone) {
      return toast.warn(ToastMessage.InvalidForm);
    }
    const jsonData = getJSONFromForm(evt.currentTarget);
    // eslint-disable-next-line no-console
    console.log(jsonData);
    // eslint-disable-next-line no-alert
    alert(jsonData);
  };

  return (
    <form action="" className="form" autoComplete='off'
      onSubmit={handleFormSubmit}
    >
      <h1 className="form__title" >Корзина</h1>

      <Login/>
      <RegistrationMap/>
      {products.length ? <Products/> : null}
      <ResultPrice screenType={ScreenType.Mobile} />
      <FormSubmit/>

    </form>
  );
}
