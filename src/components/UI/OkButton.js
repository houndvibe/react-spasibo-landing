import React from 'react';
import OkIcon from '../../assets/img/ok.svg'
import '../../css/SocialsButton.css'

const OkButton = (props) => {

  return (
    <div className='socialsButton'>
      <img src={OkIcon} alt='ok' className='socialImg' />
    </div >
  );

}

export default OkButton;