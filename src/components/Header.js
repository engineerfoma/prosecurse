import React from 'react';
import '../styles/Header.scss';
import Burger from '../images/burger_menu.svg';
import Law from '../images/law.svg';
import Scales from '../images/scales.svg';
import Task from '../images/task.svg';


const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <h1 className="navigation__title hover">Prosecurse</h1>
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
        <img className="hover" src={Burger} />
      </nav>
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
      <div className="header__main">
        <ul className="services__list list">
          <li className="services__item">
            <img className="services__item_picture" src={Law} />
            <h3 className="services__item_title">Family Law</h3>
            <p className="services__item_subtitle">We focus on ergonomics and
              meeting you where you work.
            </p>
          </li>
          <li className="services__item">
            <img className="services__item_picture" src={Scales} />
            <h3 className="services__item_title">Business Law</h3>
            <p className="services__item_subtitle">Just type what's on your mind
              and we'll get you there.
            </p>
          </li>
          <li className="services__item">
            <img className="services__item_picture" src={Task} />
            <h3 className="services__item_title services__item_title-last">Trust & Estates</h3>
            <p className="services__item_subtitle services__item_subtitle-last">the quick fox jumps over the lazy dog
            </p>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;