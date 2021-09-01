import React from 'react';
import '../css/Header.css';
import logo from '../assets/img/logo_header.png'
import HeaderLink from './HeaderLink';
import Button from './UI/Button';
import GeoButton from './UI/GeoButton';
import SearchButton from './UI/SearchButton';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='headerContent'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='header__links'>
          <HeaderLink title={'Купоны и сертификаты'} path={'/coupons'} />
          <HeaderLink title={'Впечатления'} path={'/impressions'} />
          <HeaderLink title={'Авиабилеты'} path={'/flights'} />
          <HeaderLink title={'Ж/д билеты'} path={'/tickets'} />
          <HeaderLink title={'Отели'} path={'/hotels'} />
          <HeaderLink title={'Каршеринг'} path={'/carsharing'} />
          <HeaderLink title={'Театры'} path={'/goods'} />
          <HeaderLink title={'Страхование'} path={'/insurance'} />
          <HeaderLink title={'Как подключиться'} path={'/connect'} />
          <HeaderLink title={'Партнеры'} path={'/'} />
        </div>

        <div className='vidgets'>
          <div className='vidgets__top'>
            <GeoButton currentCity={'Санкт-Петербург'} />
          </div>
          <div className='vidgets__bottom'>
            <div className='search'>
              <SearchButton />
            </div>
            <div className='logIn'>
              <Button title={'Войти'} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;