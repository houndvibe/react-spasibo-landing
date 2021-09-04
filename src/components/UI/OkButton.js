import React from 'react';
import OkIcon from '../../assets/img/ok.svg'
import '../../css/SocialsButton.css'

const OkButton = (props) => {

  return (
    <div className='button-socials'>
      <img
        className='img-socials'
        src={OkIcon}
        alt='ok'
      />
    </div >
  );

}

export default OkButton;