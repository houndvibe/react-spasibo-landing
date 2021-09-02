import React from 'react';
import IconSearch from "../../assets/img/button_search.svg"
import '../../css/SearchButton.css'

const SearchButton = ({ onClick }) => {
  return (
    <div className='searchbutton' onClick={onClick}>
      <img src={IconSearch} alt='search' />
    </div>
  );
}

export default SearchButton;