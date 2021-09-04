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
                <div className='address__station'>
                  <img src={station.img} alt='M' className='station__img' />
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
            <a href={data.link.src} className='link'>
              {data.link.text}
            </a>
          </div>

          <div className='address__way'>
            <span className='address__way-wrapper'>
              <a href='/' className='address__way-drower'>Проложить маршрут</a>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Address;