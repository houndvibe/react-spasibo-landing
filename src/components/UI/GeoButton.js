import React from 'react';
import IconGeo from "../../assets/img/button_geo.svg"
import '../../css/GeoButton.css'

const GeoButton = ({ currentCity, onClick }) => {

  return (
    <div className='geobutton' onClick={onClick}>
      <img src={IconGeo} alt='geo' />
      {currentCity}
    </div>
  );

}

export default GeoButton;