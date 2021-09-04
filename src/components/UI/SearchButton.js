import React from 'react';
import IconSearch from "../../assets/img/button_search.svg"
import '../../css/SearchButton.css'

const SearchButton = ({ onClick }) => {

  return (
    <div className='button-search' onClick={onClick}>
      <img
        className='img-search'
        src={IconSearch}
        alt='search'
      />
    </div>
  );

}

export default SearchButton;