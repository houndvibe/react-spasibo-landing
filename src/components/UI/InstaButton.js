import React from 'react';
import InstaIcon from '../../assets/img/inst.svg'
import '../../css/SocialsButton.css'
const InstaButton = (props) => {
  return (
    <div className='socialsButton'>
      <img src={InstaIcon} alt='insta' className='socialImg' />
    </div >
  );
}

export default InstaButton;