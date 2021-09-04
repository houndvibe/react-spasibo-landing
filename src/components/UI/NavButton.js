import React from 'react';
import '../../css/NavButton.css'

const NavButton = ({ title, active, onClick }) => {

  const cls = ['button-nav']
  active && cls.push('button-nav-active')

  return (
    <div className='button-nav-wrapper'>
      <button className={cls.join(' ')} onClick={onClick}>
        {title}
      </button>
    </div >
  );

}

export default NavButton;