import React from 'react';
import '../styles/Header.scss';
import Burger from '../images/burger_menu.svg';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <h1 className="navigation__title">Prosecurse</h1>
        <ul className="navigation__list">
          <li>
            <a className="navigation__list_item" href="#">Home</a>
          </li>
          <li>
            <a className="navigation__list_item" href="#">Product</a>
          </li>
          <li>
            <a className="navigation__list_item" href="#">Pricing</a>
          </li>
          <li>
            <a className="navigation__list_item" href="#">Contact</a>
          </li>
        </ul>
        <img className="navigation__burger" src={Burger} />
      </nav>
      <div className="header__main">
        <div className="header__about">
          <h2 className="header__about_title">LEGAL PRO SERVICES</h2>
          <p className="header__about_subtitle">We know how large objects will act,
            but things on a small scale.
          </p>
          <div className="buttons">
            <button type="button" className="button header__about_button">Get Quote Now</button>
            <button type="button" className="button header__about_button-more">Learn More</button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header;