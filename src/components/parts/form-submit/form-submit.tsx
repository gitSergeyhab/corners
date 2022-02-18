import { useSelector } from 'react-redux';
import { getProducts } from '../../../store/products-reducer/products-reducer-selectors';

export default function FormSubmit() {

  const products = useSelector(getProducts);

  return (
    <button type="submit" disabled={!products.length} className="form__submit submit-btn">Купить</button>
  );
}
