import React from 'react';
import Breadcrumb from '../../components/UI/Breadcrumb'
import Billboard from '../Billboard';
import AppleVendor from '../../assets/img/apple_vendor.png'
import Map from '../../assets/img/map.png'
import Address from '../Address'
import { billboardsData, adressDdata } from '../../data/Data'
import '../../css/ActionPage.css'

const ActionPage = (props) => {

  return (
    <div className='page'>
      <div className='page__content'>

        <div className='contentblock breadcrumbs'>
          <Breadcrumb steps={['Скидочные купоны', 'Развлечения']} />
        </div>

        <div className='contentblock title mt20'>
          Apple Music за СПАСИБО
        </div>

        <div className='contentblock billboars mt30'>
          <Billboard data={billboardsData[0]} />
        </div>

        <div className='contentblock vendor mt40'>
          <img
            className='img-round-m'
            src={AppleVendor}
            alt='logo'
          />
          <span className='subtitle-m'>
            Apple Music
          </span>
        </div>

        <div className='contentblock addresses mt40'>
          {adressDdata.map(data => <Address data={data} />)}
        </div>

        <div className='contentblock map mt40'>
          <img src={Map} alt='map' className='map__img' />
        </div>

      </div>
    </div>
  );

}

export default ActionPage;