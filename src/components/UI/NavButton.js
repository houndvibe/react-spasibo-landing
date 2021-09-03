import React from 'react';
import '../../css/NavButton.css'

const NavButton = ({ title, active, onClick }) => {

  const cls = ['navbutton']
  active && cls.push('navbutton-active')

  return (
    <div className='navbuttonWrapper'>
      <button className={cls.join(' ')} onClick={onClick}>
        {title}
      </button>
    </div >
  );

}

export default NavButton;