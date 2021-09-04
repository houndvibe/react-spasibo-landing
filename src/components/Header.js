import React from 'react';
import { connect } from 'react-redux'
import logo from '../assets/img/logo_header.png'
import HeaderLink from './HeaderLink';
import Button from './UI/Button';
import GeoButton from './UI/GeoButton';
import SearchButton from './UI/SearchButton';
import SearchModal from './SearchModal';
import CityModal from './CityModal';
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
      <div className='header__content'>

        <div className='header__logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='header__navigation mt10'>
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

        <div className='header__vidgets'>

          <div className='header__vidgets-top'>
            <GeoButton
              currentCity={'Санкт-Петербург'}
              onClick={onShowCityPopup}
            />
          </div>

          <div className='header__vidgets-bottom mt10'>
            <div className='search'>
              <SearchButton onClick={onSearchOn} />
            </div>
            <div className='login'>
              <Button
                title={'Войти'}
                onClick={() => alert('Невозможно выполнить вход в демо режиме')}
              />
            </div>
          </div>

        </div>

      </div>

      <CityModal
        isVisible={isCitySelectPopupVisible}
        currentCity={currentCity}
        onClick={onHideCityPopup}
      />

      <SearchModal
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

