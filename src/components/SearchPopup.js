import React, { useState } from 'react';
import '../css/SearchPopup.css'
import IconSearch from "../assets/img/button_search.svg"

const SearchPopup = ({ isVisible, onClose }) => {

  const [word, setWord] = useState('')

  const backgroundCls = ['searchPopupBackground'];
  const popupCls = ['searchPopup'];

  if (isVisible) {
    backgroundCls.push('searchPopupBackground-active')
    popupCls.push('searchPopup-active')
  }

  return (
    <>
      <div className={backgroundCls.join(' ')} onClick={onClose}></div>

      <div className={popupCls.join(' ')}>
        <div className='searchPopup__border'>
          <input
            className='searcPopup__input'
            type='text'
            value={word}
            placeholder='Поиск'
            onChange={(e) => setWord(e.target.value)}
          />
          <img
            className='searchPopup__img'
            src={IconSearch}
            alt='search'
            onClick={() => alert(`Поиск по ${word}`)}
          />
        </div>
      </div>
    </>
  );
}

export default SearchPopup;