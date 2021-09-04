import React from 'react';
import Button from './UI/Button';
import '../css/CityModal.css'

const CityModal = ({ isVisible, currentCity, onClick }) => {

  let cls = ['modal-city']
  isVisible && cls.push('modal-city-active')

  return (
    <div className={cls.join(' ')}>

      <div className='modal-city__text'>
        Ваш город - <span className='modal-city__text-bold'>{`${currentCity}`}</span>?
      </div>

      <div className='modal-city__buttons'>
        <Button
          title={'Да'}
          onClick={onClick}
        />
        <Button
          title={'Сменить город'}
          onClick={() => alert('В данный момент функция не доступна')}
        />
      </div>

    </div>
  );
}

export default CityModal;