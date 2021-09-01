import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/HeaderLink.css'

const HeaderLink = ({ title, path }) => {
  return (
    <div className='headerlink'>
      <NavLink to={path} className='navlink'>
        {title}
      </NavLink>
    </div>
  );
}

export default HeaderLink;