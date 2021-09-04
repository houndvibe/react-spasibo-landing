import React from 'react';
import FbIcon from '../../assets/img/fb.svg'
import '../../css/SocialsButton.css'

const FbButton = (props) => {

  return (
    <div className='button-socials'>
      <img
        src={FbIcon}
        alt='facebook'
        className='img-socials'
      />
    </div >
  );

}

export default FbButton;