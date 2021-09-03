import React from 'react';
import HeaderLink from './HeaderLink';
import SberLogo from '../assets/img/sberlogo.svg'
import GooglePlayButton from './UI/GooglePlayButton';
import AppStoreButton from './UI/AppStoreButton'
import OkButton from './UI/OkButton'
import FbButton from './UI/FbButton'
import InstaButton from './UI/InstaButton'
import VkButton from './UI/VkButton'
import '../css/Footer.css'

export const Footer = (props) => {

  return (
    <div className='footer'>
      <div className='footer__content'>

        <div className='footer__left'>
          <div className='code'>
            <div className='code__number'>
              900
            </div>
            <div className='code__text'>
              По России бесплатно
            </div>
          </div>

          <div className='footer__logo'>
            <img src={SberLogo} alt='sberlogo' />
          </div>

          <div className='copyright'>
            © 1997—2019 ПАО Сбербанк.
          </div>
        </div>

        <div className='footer__right'>
          <div className='footer__links'>
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

          <div className='socials'>
            <div className='socials__stores'>
              <GooglePlayButton />
              <AppStoreButton />
            </div>
            <div className='socials__networks'>
              <OkButton />
              <FbButton />
              <VkButton />
              <InstaButton />
            </div>
          </div>

          <div className='policy'>
            Политика АО «ЦПЛ» в отношении обработки персональных данных и
            Согласие на обработку данных участника Программы «Спасибо от Сбербанка»
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;