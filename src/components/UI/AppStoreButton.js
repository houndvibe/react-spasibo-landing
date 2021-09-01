import React from 'react';
import AppStoreIcon from '../../assets/img/app-store.svg'
import '../../css/SocialsButton.css'

const AppStoreButton = (props) => {
  return (
    <div className='socialsButton'>
      <img src={AppStoreIcon} alt='app-store' className='socialImg' />
    </div >
  );
}

export default AppStoreButton;