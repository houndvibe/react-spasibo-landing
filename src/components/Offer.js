import React from 'react';
import '../css/Offer.css'

const Offer = ({
  preview,
  logo,
  name,
  text,
  onClick
}) => {

  return (
    <div className='offer' onClick={onClick}>

      <div className='offer__preview'>
        <img src={preview} alt='preview' className='prev_img' />
      </div>

      <div className='offer__info'>

        <div className='offer__logo'>
          <img src={logo} alt='logo' className='logo_img' />
        </div>

        <div className='offer__details'>
          <div className='offer__name'>
            {name}
          </div>
          <div className='offer__text'>
            {text}
          </div>
        </div>

      </div>

    </div>
  );

}

export default Offer;