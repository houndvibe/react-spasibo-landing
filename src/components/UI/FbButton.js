import React from 'react';
import FbIcon from '../../assets/img/fb.svg'
import '../../css/SocialsButton.css'

const FbButton = (props) => {

  return (
    <div className='socialsButton'>
      <img
        className='socialImg'
        src={FbIcon}
        alt='facebook'
      />
    </div >
  );

}

export default FbButton;