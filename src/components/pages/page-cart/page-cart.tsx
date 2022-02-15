import Breadcrumbs from '../../parts/breadcrumbs/breadcrumbs';
import Form from '../../parts/form/form';
import Header from '../../parts/header/header';

export default function PageCart () {
  return (
    <main className="page-cart">

      <section className="page-cart__wrapper">
        <h1 className="visually-hidden">Корзина</h1>
        <Header/>
        <Breadcrumbs/>
        <Form/>
      </section>
    </main>
  );
}
