import React from 'react';
import '../css/CityPopup.css'
import Button from './UI/Button';

const CityPopup = ({ isVisible, currentCity, onClick }) => {

  let cls = ['cityPopup']
  isVisible && cls.push('cityPopup_active')

  return (
    <div className={cls.join(' ')}>
      <div className='cityPopup_text'>
        Ваш город - <span className='cityPopup_text-bold'>{`${currentCity}`}</span>?
      </div>
      <div className='cityPopup_buttons'>
        <Button title={'Да'} onClick={onClick} />
        <Button title={'Сменить город'} onClick={() => alert('В данный момент функция не доступна')} />
      </div>
    </div>
  );
}

export default CityPopup;