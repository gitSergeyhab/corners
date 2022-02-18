import { Link } from 'react-router-dom';

import './not-found-page.css';

export function NotFoundPage() {
  return (
    <div className='react-404'>У нас пока только главная страница, она же <br/><Link to='/'>Корзина</Link></div>
  );
}
