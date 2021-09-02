import React from 'react';
import '../css/PartnersPage.css'
import NavButton from '../components/UI/NavButton'
import Switch from './UI/Switch';
import Card from './Card';
import MvideoLogo from '../assets/img/mvideo_logo.png'
import BORKLogo from '../assets/img/bork_logo.png'
import BkLogo from '../assets/img/bk_logo.png'
import EsLogo from '../assets/img/es_logo.png'
import HolLogo from '../assets/img/colls_logo.png'
import Button from './UI/Button'
import Offer from '../components/Offer'
import MvideoLogo_s from '../assets/img/mvideo_logo_small.png'
import EsLogo_s from '../assets/img/es_logo_small.png'
import HolLogo_s from '../assets/img/colls_logo_small.png'
import Mvideo_prev from '../assets/img/mvideo_prev.png'
import Hol_prev from '../assets/img/colls_prev.png'
import Es_prev from '../assets/img/es_prev.png'
import Plate from './Plate';
import pyterochka_plate from '../assets/img/plate_img/5_plate.png'
import bk_plate from '../assets/img/plate_img/bk_plate.png'
import ivi_plate from '../assets/img/plate_img/ivi_plate.png'
import mega_plate from '../assets/img/plate_img/mega_plate.png'
import rep_plate from '../assets/img/plate_img/rep_plate.png'
import pc_plate from '../assets/img/plate_img/pc_plate.png'
import lm_plate from '../assets/img/plate_img/lm_plate.png'
import mt_plate from '../assets/img/plate_img/mt_plate.png'
import bz_plate from '../assets/img/plate_img/bz_plate.png'
import lr_plate from '../assets/img/plate_img/lr_plate.png'
import bc_plate from '../assets/img/plate_img/bc_plate.png'
import tez_plate from '../assets/img/plate_img/tez_plate.png'
import sb_plate from '../assets/img/plate_img/sb_plate.png'
import oz_plate from '../assets/img/plate_img/oz_plate.png'
import tr_plate from '../assets/img/plate_img/tr_plate.png'



const PartnersPage = (props) => {
  return (
    <div className='partnersPage'>
      <div className='partnersPage__content'>
        <div className='title'>
          Партнеры и предложения
        </div>
        <div className='navButtons'>
          <NavButton title={'Все партнеры'} />
          <NavButton title={'Популярные'} />
          <NavButton title={'Супермаркеты'} />
          <NavButton title={'Кафе и рестораны'} />
          <NavButton title={'Такси'} />
          <NavButton title={'Красота'} />
          <NavButton title={'Электроника и бытовая техника'} />
          <NavButton title={'Зоотовары'} />
          <NavButton title={'Кино и театр'} />
          <NavButton title={'...'} />
        </div>
        <div className='modeSvitcher'>
          <Switch
            leftText={'Начисляют Спасибо'}
            rightText={'Принимают Спасибо'}
          />
        </div>
        <div className='cards'>
          <Card percent={'1,5'} name={'М.Видео'} logo={MvideoLogo} />
          <Card percent={'3'} name={'Бургер Кинг'} logo={BkLogo} />
          <Card percent={'4,5'} name={'Холодильник.ру'} logo={HolLogo} />
          <Card percent={'от 1,5'} name={'BORK'} logo={BORKLogo} />
          <Card percent={'1,5'} name={'Евросеть'} logo={EsLogo} />
        </div>
        <div className='moreCards'>
          <NavButton title={'еще 4 партнера'} active={true} />
        </div>
        <div className='subtitle'>
          3 предложения в категории «Электроника и бытовая техника»
        </div>
        <div className='offers'>
          <Offer
            preview={Hol_prev}
            logo={HolLogo_s}
            name={'Технопарк'}
            text={'20% спасибо за технику Electrolux'}
          />
          <Offer
            preview={Es_prev}
            logo={EsLogo_s}
            name={'Евросеть'}
            text={'10% спасибо за покупки в черную пятницу'}
          />
          <Offer
            preview={Mvideo_prev}
            logo={MvideoLogo_s}
            name={'М.Видео'}
            text={'15% спасибо для студентов'}
          />
        </div>
        <div className='moreOffers'>
          <NavButton title={'еще 4 предложения'} active={true} />
        </div>
        <div className='plates'>
          <Plate
            text={'Скидки за бонусы'}
            content={[bk_plate, pyterochka_plate, rep_plate, mega_plate, ivi_plate]}
          />
          <Plate
            text={'Большой % начисления'}
            content={[bz_plate, pyterochka_plate, lr_plate]}
          />
          <Plate
            text={'Выгодные купоны'}
            content={[pc_plate, lm_plate, mt_plate]}
          />
          <Plate
            text={'Персональное исходя из трат'}
            content={[oz_plate, tez_plate, bc_plate, sb_plate, tr_plate]}
          />
        </div>
      </div>
    </div>
  );
}

export default PartnersPage;