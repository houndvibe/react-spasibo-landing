import React from 'react';
import '../css/Card.css'

const Card = ({ percent, logo, name }) => {
  return (
    <div className='card'>
      <div className='number'>
        {`${percent}%`}
      </div>
      <div className='text'>
        Спасибо от суммы покупки
      </div>
      <div className='logoWrapper' >
        <img src={logo} alt='logo' className='logo' />
      </div>
      <div className='name' >
        {name}
      </div>
    </div>
  );
}

export default Card;