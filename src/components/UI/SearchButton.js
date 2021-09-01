import React from 'react';
import IconSearch from "../../assets/img/button_search.svg"
import '../../css/SearchButton.css'

const SearchButton = (props) => {
  return (
    <div className='searchbutton'>
      <img src={IconSearch} alt='search' />
    </div>
  );
}

export default SearchButton;