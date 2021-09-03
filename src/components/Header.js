import React from 'react';
import { connect } from 'react-redux'
import logo from '../assets/img/logo_header.png'
import HeaderLink from './HeaderLink';
import Button from './UI/Button';
import GeoButton from './UI/GeoButton';
import SearchButton from './UI/SearchButton';
import SearchPopup from './SearchPopup';
import CityPopup from './CityPopup';
import {
  onShowCityPopup,
  onHideCityPopup,
  onSearchOn,
  onSearchOff
} from '../store/actions'
import '../css/Header.css';


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
              <Button
                title={'Войти'}
                onClick={() => alert('Невозможно выполнить вход в демо режиме')}
              />
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
  currentCity: state.currentCity,
  isSearchActive: state.isSearchActive,
  isCitySelectPopupVisible: state.isCitySelectPopupVisible,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchOn: () => dispatch(onSearchOn()),
  onSearchOff: () => dispatch(onSearchOff()),
  onShowCityPopup: () => dispatch(onShowCityPopup()),
  onHideCityPopup: () => dispatch(onHideCityPopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

