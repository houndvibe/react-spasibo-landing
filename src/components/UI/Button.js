import React from 'react';
import '../../css/Button.css'

const Button = ({ title }) => {
  return (
    <div className='button'>
      {title}
    </div>
  );
}

export default Button;