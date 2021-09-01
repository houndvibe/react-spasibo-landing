import React from 'react';
import IconGeo from "../../assets/img/button_geo.svg"
import '../../css/GeoButton.css'

const GeoButton = ({ currentCity }) => {

  return (
    <div className='geobutton'>
      <img src={IconGeo} alt='geo' />
      {currentCity}
    </div>
  );

}

export default GeoButton;