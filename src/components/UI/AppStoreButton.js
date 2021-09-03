import React from 'react';
import AppStoreIcon from '../../assets/img/app-store.svg'
import '../../css/SocialsButton.css'

const AppStoreButton = (props) => {

  return (
    <div className='socialsButton'>
      <img
        className='socialImg'
        src={AppStoreIcon}
        alt='app-store'
      />
    </div >
  );

}

export default AppStoreButton;