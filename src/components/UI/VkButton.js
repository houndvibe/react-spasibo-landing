import React from 'react';
import VkIcon from '../../assets/img/vk.svg'
import '../../css/SocialsButton.css'


const VkButton = (props) => {

  return (
    <div className='socialsButton'>
      <img src={VkIcon} alt='vk' className='socialImg' />
    </div >
  );

}

export default VkButton;