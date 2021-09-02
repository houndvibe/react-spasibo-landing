import React from 'react';
import '../../css/Switch.css'

const Switch = ({ leftText, rightText }) => {
  return (
    <div className='switch'>
      <div className='switch__text'>
        {leftText}
      </div>
      <label class="switch__label">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
      <div className='switch__text'>
        {rightText}
      </div>
    </div>
  );
}

export default Switch;