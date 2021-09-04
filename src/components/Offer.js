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
        <img
          className='img-sq-m'
          src={preview}
          alt='preview'
        />
      </div>

      <div className='offer__info'>

        <div className='offer__logo'>
          <img
            className='img-round-s'
            src={logo}
            alt='logo'
          />
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