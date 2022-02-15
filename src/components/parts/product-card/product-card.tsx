import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../store/actions';
import { getProducts } from '../../../store/products-reducer/products-reducer-selectors';
import { Product } from '../../../types/types';
import { changeData } from '../../../utils/data-utils';
import { setProductToStorage } from '../../../utils/storage-utils';

// {
//   "id": "904.989.72",
//   "name": "VINTER GARLAND 2021",
//   "type": "Украшение, венок, красный/золотой38 см",
//   "img": "https://www.ikea.com/ru/ru/images/products/vinter-2021-vinte…krashenie-venok-krasnyy-zolotoy__0986113_pe817049_s5.jpg?f=s",
//   "price": 1699,
//   "amount": 1
// }

export default function ProductCard({product} : {product: Product}) {

  const {amount, id, img, name, price, type} = product;

  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  const changeProducts = (count: number) => {
    const newData = changeData(products, id, count);
    dispatch(setProducts(newData));
    setProductToStorage(newData);
  };

  const handleMinusClick = () => changeProducts(-1);
  const handlePlusClick = () => changeProducts(1);
  const handleDeleteClick = () => changeProducts(0);


  return (
    <li className="products__item">
      <div className="product-card">

        <img className="product-card__image" width="80" height="80" src={img} alt={name}/>
        <div className="product-card__info">
          <h3 className="product-card__name">{name}</h3>
          <p className="product-card__description">{type}</p>
          <div className="product-card__count product-count">
            <button
              onClick={handleMinusClick}
              type="button"
              className="product-count__sign product-count__sign--minus"
            >
            </button>
            <div className="product-count__num">{amount}</div>
            <button
              onClick={handlePlusClick}

              type="button"
              className="product-count__sign product-count__sign--plus"
            >
            </button>
          </div>
        </div>
        <div className="product-card__end">
          <p className="product-card__price">{price} руб.</p>

          <button
            onClick={handleDeleteClick}
            type="button"
            className="product-card__delete"
          >Удалить
          </button>

        </div>
      </div>
    </li>
  );
}
