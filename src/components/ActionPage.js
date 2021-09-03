import React from 'react';
import Breadcrumb from '../components/UI/Breadcrumb'
import Billboard from './Billboard';
import AppleVendor from '../assets/img/apple_vendor.png'
import Map from '../assets/img/map.png'
import Address from './Address'
import { billboardsData, adressDdata } from '../data/Data'
import '../css/ActionPage.css'

const ActionPage = (props) => {

  return (
    <div className='actionPage'>
      <div className='actionPage__content'>

        <div className='breadcrumbs'>
          <Breadcrumb steps={['Скидочные купоны', 'Развлечения']} />
        </div>

        <div className='title'>
          Apple Music за СПАСИБО
        </div>

        <div className='billboard'>
          <Billboard data={billboardsData[0]} />
        </div>

        <div className='vendor'>
          <img src={AppleVendor} alt='logo' />
          <span className='vendor__name'>
            Apple Music
            </span>
        </div>

        <div className='addresses'>
          {adressDdata.map(data => <Address data={data} />)}
        </div>

        <div className='map'>
          <img src={Map} alt='map' className='map_img' />
        </div>

      </div>
    </div>
  );

}

export default ActionPage;