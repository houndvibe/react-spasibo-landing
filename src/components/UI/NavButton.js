import React from 'react';
import '../../css/NavButton.css'

const NavButton = ({ title, active }) => {
  const cls = ['navbutton']
  active && cls.push('active')
  return (
    <div className='navbuttonWrapper'>
      <button className={cls.join(' ')}>
        {title}
      </button>
    </div>
  );
}

export default NavButton;