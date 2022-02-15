import FormSubmit from '../form-submit/form-submit';
import Login from '../login/login';
import Products from '../products/products';
import RegistrationMap from '../registration-map/registration-map';
import ResultMobile from '../result-mobile/result-mobile';

export default function Form() {
  return (
    <form action="" className="form">
      <h1 className="form__title" >Корзина</h1>

      <Login/>
      <RegistrationMap/>
      <Products/>
      <ResultMobile/>
      <FormSubmit/>

    </form>
  );
}
