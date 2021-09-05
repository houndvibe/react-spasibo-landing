import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../../css/DropdownMenu.css'

const DropdownMenu = ({ data }) => {

  return (
    <>
      <Dropdown className='dropdown' autoClose={true}>
        <Dropdown.Toggle className='dropdown__button'>
          <GiHamburgerMenu />
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown__menu'>
          {data.map((element) => {
            return (
              <Dropdown.Item href={element.path} className='dropdown__item' key={Math.random() + element.title}>
                {element.title}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );

}

export default DropdownMenu;