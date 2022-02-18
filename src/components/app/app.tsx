import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import PageCart from '../pages/page-cart/page-cart';
import Header from '../parts/header/header';


function App(): JSX.Element {

  return (
    <BrowserRouter>
      <main className="page-cart">

        <section className="page-cart__wrapper">
          <h1 className="visually-hidden">Корзина</h1>
          <Header/>
          <Routes>

            <Route path='/' element={<PageCart/>}/>
            <Route path='*' element={<NotFoundPage/>}/>

          </Routes>
        </section>
      </main>
    </BrowserRouter>
  ) ;
}

export default App;
