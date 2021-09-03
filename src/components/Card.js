import React from 'react';
import '../css/Card.css'

const Card = ({ percent, logo, name, onClick }) => {

  return (
    <div className='card' onClick={onClick}>

      <div className='number'>
        {`${percent}%`}
      </div>

      <div className='text'>
        Спасибо от суммы покупки
      </div>

      <div className='logoWrapper' >
        <img
          className='card__logo'
          src={logo}
          alt='logo'
        />
      </div>

      <div className='name' >
        {name}
      </div>

    </div>
  );

}

export default Card;