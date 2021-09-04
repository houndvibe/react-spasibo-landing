import React from 'react';
import '../css/Card.css'

const Card = ({ percent, logo, name, onClick }) => {

  return (
    <div className='card' onClick={onClick}>

      <div className='card__number'>
        {`${percent}%`}
      </div>

      <div className='card__text'>
        Спасибо от суммы покупки
      </div>

      <div className='card__logo' >
        <img
          className='img-round-l mt20'
          src={logo}
          alt='logo'
        />
      </div>

      <div className='card__name mt30' >
        {name}
      </div>

    </div>
  );

}

export default Card;