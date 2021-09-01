import React from 'react';
import FbIcon from '../../assets/img/fb.svg'
import '../../css/SocialsButton.css'
const FbButton = (props) => {
  return (
    <div className='socialsButton'>
      <img src={FbIcon} alt='facebook' className='socialImg' />
    </div >
  );
}

export default FbButton;