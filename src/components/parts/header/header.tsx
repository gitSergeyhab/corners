import { Link } from 'react-router-dom';

const PAGE_NUM = 6;
const pages = new Array(PAGE_NUM).fill(null).map((_, index) => index + 1);

function Page({page}: {page: number}) {
  return <li className="logo-nav__item"><Link to="/">страница {page}</Link></li>;
}


export default function Header() {

  const leftPages = pages.slice(0, 3).map((item) => <Page key={item} page={item}/>);
  const rightPages = pages.slice(3).map((item) => <Page key={item} page={item}/>);

  return (
    <nav className="logo-nav">
      <ul className="logo-nav__list">

        {leftPages}

      </ul>
      <img src="/img/svg/logo.svg" alt="logo" className="logo-nav__logo"/>

      <ul className="logo-nav__list logo-nav__list--right">

        {rightPages}

      </ul>
    </nav>
  );
}
