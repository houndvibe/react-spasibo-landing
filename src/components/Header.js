import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { connect } from 'react-redux'
import { menuElements } from '../data/Data.js'
import logo from '../assets/img/logo_header.png'
import HeaderLink from './HeaderLink';
import Button from './UI/Button';
import GeoButton from './UI/GeoButton';
import SearchButton from './UI/SearchButton';
import SearchModal from './SearchModal';
import CityModal from './CityModal';
import DropdownMenu from '../components/UI/Dropdown'
import { GrLogin } from 'react-icons/gr';



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

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  document.body.style.overflow = isSearchActive ? "hidden" : "scroll"

  return (
    <div
      className='header'
      onClick={isCitySelectPopupVisible ? onHideCityPopup : null}
    >
      <div className='header__content'>
        {isDesktopOrLaptop
          ? <>
            <div className='header__logo'>
              <img src={logo} alt='logo' className='img-logo' />
            </div>

            <div className='header__navigation mt10'>
              {menuElements.map((element) => {
                return (
                  <HeaderLink title={element.title} path={element.path} key={Math.random() + element.title} />
                )
              })}
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
          </>
          : <>
            <div className='header__logo'>
              <img src={logo} alt='logo' className='img-logo' />
            </div>
            <DropdownMenu data={menuElements} />
            <GeoButton
              currentCity={'Санкт-Петербург'}
              onClick={onShowCityPopup}
            />
            <div className='search'>
              <SearchButton onClick={onSearchOn} />
            </div>
            <GrLogin onClick={() => alert('Невозможно выполнить вход в демо режиме')} />
          </>
        }
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

