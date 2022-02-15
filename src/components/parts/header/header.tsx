export default function Header() {
  return (
    <nav className="logo-nav">
      <ul className="logo-nav__list">
        <li className="logo-nav__item"><a href="/">страница 1</a></li>
        <li className="logo-nav__item"><a href="/">страница 1</a></li>
        <li className="logo-nav__item"><a href="/">страница 1</a></li>
      </ul>
      <img src="/img/svg/logo.svg" alt="logo" className="logo-nav__logo"/>

      <ul className="logo-nav__list logo-nav__list--right">
        <li className="logo-nav__item"><a href="/">страница 1</a></li>
        <li className="logo-nav__item"><a href="/">страница 1</a></li>
        <li className="logo-nav__item"><a href="/">страница 1</a></li>
      </ul>
    </nav>
  );
}
