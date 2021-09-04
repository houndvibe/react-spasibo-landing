import React from 'react';
import VkIcon from '../../assets/img/vk.svg'
import '../../css/SocialsButton.css'


const VkButton = (props) => {

  return (
    <div className='button-socials'>
      <img
        className='img-socials'
        src={VkIcon}
        alt='vk'
      />
    </div >
  );

}

export default VkButton;