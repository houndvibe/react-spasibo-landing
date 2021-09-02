import React from 'react';
import '../css/Header.css';
import logo from '../assets/img/logo_header.png'
import HeaderLink from './HeaderLink';
import Button from './UI/Button';
import GeoButton from './UI/GeoButton';
import SearchButton from './UI/SearchButton';
import { connect } from 'react-redux'
import CityPopup from './CityPopup';
import {
  onShowCityPopup,
  onHideCityPopup,
  onSearchOn,
  onSearchOff
} from '../store/actions'
import SearchPopup from './SearchPopup';


const Header = ({
  onShowCityPopup,
  onHideCityPopup,
  isCitySelectPopupVisible,
  currentCity,
  onSearchOn,
  onSearchOff,
  isSearchActive
}) => {
  return (
    <div
      className='header'
      onClick={isCitySelectPopupVisible ? onHideCityPopup : null}
    >
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
            <GeoButton
              currentCity={'Санкт-Петербург'}
              onClick={onShowCityPopup}
            />
          </div>
          <div className='vidgets__bottom'>
            <div className='search'>
              <SearchButton onClick={onSearchOn} />
            </div>
            <div className='logIn'>
              <Button title={'Войти'} />
            </div>
          </div>
        </div>
      </div>
      <CityPopup
        isVisible={isCitySelectPopupVisible}
        currentCity={currentCity}
        onClick={onHideCityPopup}
      />
      <SearchPopup
        isVisible={isSearchActive}
        onClose={onSearchOff}
      />
    </div >
  );
}

const mapStateToProps = (state) => ({
  isCitySelectPopupVisible: state.isCitySelectPopupVisible,
  currentCity: state.currentCity,
  isSearchActive: state.isSearchActive
});

const mapDispatchToProps = (dispatch) => ({
  onShowCityPopup: () => dispatch(onShowCityPopup()),
  onHideCityPopup: () => dispatch(onHideCityPopup()),
  onSearchOn: () => dispatch(onSearchOn()),
  onSearchOff: () => dispatch(onSearchOff())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

