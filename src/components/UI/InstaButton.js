import React from 'react';
import InstaIcon from '../../assets/img/inst.svg'
import '../../css/SocialsButton.css'
const InstaButton = (props) => {

  return (
    <div className='button-socials'>
      <img
        className='img-socials'
        src={InstaIcon}
        alt='insta'
      />
    </div >
  );

}

export default InstaButton;