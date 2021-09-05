import React, { useState } from 'react';
import '../../css/Switch.css'

const Switch = ({ leftText, rightText }) => {

  const clsLeft = ['switch__text']
  const clsRight = ['switch__text']

  const [isChecked, setIsChecked] = useState(false)

  isChecked
    ? clsLeft.push('switch__text-active')
    : clsRight.push('switch__text-active')

  return (
    <div className='switch'>
      <div className={clsLeft.join(' ')}>
        {leftText}
      </div>
      <label className="switch__label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="switch__slider"></span>
      </label>
      <div className={clsRight.join(' ')}>
        {rightText}
      </div>
    </div>
  );
}

export default Switch;