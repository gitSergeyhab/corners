import { useSelector } from 'react-redux';
import { getProducts } from '../../../store/products-reducer/products-reducer-selectors';
import ProductCard from '../product-card/product-card';

export default function Products() {

  const products = useSelector(getProducts);


  const productList = products.map((item) => <ProductCard key={item.id} product={item}/>);

  return (
    <section className="form__products products">
      <h2 className="products__title">Выбранные товары:</h2>
      <ul className="products__list">

        {productList}

      </ul>
    </section>
  );
}
