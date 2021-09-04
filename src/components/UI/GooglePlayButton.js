import React from 'react';
import GooglePlayIcon from '../../assets/img/google-play.svg'
import '../../css/SocialsButton.css'

const GooglePlayButton = (props) => {

  return (
    <div className='button-socials'>
      <img
        className='img-socials'
        src={GooglePlayIcon}
        alt='google-play'
      />
    </div >
  );

}

export default GooglePlayButton;