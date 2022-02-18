import { useSelector } from 'react-redux';
import { ScreenType } from '../../../const';
import { getProducts } from '../../../store/products-reducer/products-reducer-selectors';
import { getPrice } from '../../../utils/data-utils';


export default function ResultPrice({screenType} : {screenType: ScreenType}) {

  const products = useSelector(getProducts);

  if (!products.length) {
    return null;
  }

  const price = getPrice(products);

  const wrapClass = screenType === ScreenType.Desktop ? 'map-section__result-desktop result-desktop' : 'form__result-mobile result-mobile';

  return (
    <div className={wrapClass}>
      <div className={`result-${screenType}__result`}>Итог:</div>
      <div className={`result-${screenType}__price`} >{price} руб.</div>
    </div>
  );
}
