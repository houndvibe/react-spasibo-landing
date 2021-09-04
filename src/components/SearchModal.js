import React, { useState } from 'react';
import '../css/SearchModal.css'
import IconSearch from "../assets/img/button_search.svg"

const SearchModal = ({ isVisible, onClose }) => {

  const [word, setWord] = useState('')

  const backgroundCls = ['modal-search__background'];
  const popupCls = ['modal-search'];

  if (isVisible) {
    backgroundCls.push('modal-search__background-active')
    popupCls.push('modal-search-active')
  }

  return (
    <>
      <div className={backgroundCls.join(' ')} onClick={onClose}></div>

      <div className={popupCls.join(' ')}>
        <div className='modal-search__border'>
          <input
            className='modal-search__input'
            type='text'
            value={word}
            placeholder='Поиск'
            onChange={(e) => setWord(e.target.value)}
          />
          <img
            className='modal-search__img'
            src={IconSearch}
            alt='search'
            onClick={() => alert(`Поиск по ${word}`)}
          />
        </div>
      </div>
    </>
  );
}

export default SearchModal;