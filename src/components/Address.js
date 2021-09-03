import React from 'react';
import '../css/Address.css'


const Address = ({ data }) => {

  return (
    <div className='address'>
      <div className='address__content'>

        <div className='address__marker'>
          <img src={data.marker} alt='marker' />
        </div>

        <div className='address__info'>

          <div className='address__address'>
            {data.address}
          </div>

          <div className='address__stations'>
            {data.stations.map(station => {
              return (
                <div className='station'>
                  <img src={station.img} alt='M' className='stationImg' />
                  <span>{station.name}</span>
                </div>
              )
            })}
          </div>

          <div className='address__number'>
            {data.number}
          </div>

          <div className='address__time'>
            {data.time}
          </div>

          <div className='address__links'>
            <a href={data.link.src} className='address__link'>
              {data.link.text}
            </a>
          </div>

          <div className='address__way'>
            <span className='way_wrapper'>
              <a href='/'>Проложить маршрут</a>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Address;