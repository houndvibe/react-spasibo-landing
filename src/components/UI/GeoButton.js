import React from 'react';
import IconGeo from "../../assets/img/button_geo.svg"
import '../../css/GeoButton.css'

const GeoButton = ({ currentCity, onClick }) => {

  return (
    <div className='button-geo' onClick={onClick}>
      <img
        className='img-geo'
        src={IconGeo}
        alt='geo'
      />
      {currentCity}
    </div>
  );

}

export default GeoButton;