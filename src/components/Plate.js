import React from 'react';
import '../css/Plate.css'

const Plate = ({ text, content }) => {

  const cls = ['plate']
  content.length === 5 ? cls.push('long') : cls.push('short')

  return (
    <div className='plateWrapper'>
      <div className={cls.join(' ')}>
        <div className='plate__top'>
          {content.map(src => {
            return (
              <img src={src} alt='logo' className='plate__img' key={Math.random() + src} />
            )
          })}
        </div>
      </div>
      <div className='plate__bottom'>
        <div className=' rounding rounding-left'>
          {'...'}
        </div>
        <div className='plate__text'>
          {text}
        </div>
        <div className='rounding rounding-right'>
          {'...'}
        </div>
      </div>
    </div>
  );
}

export default Plate;