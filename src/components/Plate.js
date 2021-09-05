import React from 'react';
import '../css/Plate.css'
import { useMediaQuery } from 'react-responsive'

const Plate = ({
  text,
  content,
  onClick
}) => {


  const isMobile = useMediaQuery({
    query: '(min-width: 700px)'
  })

  let cls = ['plate']
  content.length === 5
    ? cls.push('plate-long')
    : cls.push('plate-short')

  return (
    <div className='plate__wrapper'>

      <div className={cls.join(' ')}>
        <div className='plate__top'>
          {content.map(src => {
            return (
              <img
                className='img-round-l'
                src={src}
                alt='logo'
                key={Math.random() + src}
                onClick={onClick}
              />
            )
          })}
        </div>
      </div>
      {isMobile
        ? <div className='plate__bottom'>
          <div className=' plate__rounding rounding-left'>
            {'...'}
          </div>
          <div className='plate__text'>
            {text}
          </div>
          <div className='plate__rounding rounding-right'>
            {'...'}
          </div>
        </div>
        : <div className='plate__bottom-s'>
          {text}
        </div>
      }
    </div>
  );
}

export default Plate;