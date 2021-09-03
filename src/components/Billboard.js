import React from 'react';
import '../css/Billboard.css'

const Billboard = ({ data }) => {

  const content = data.content

  return (
    <div className='billboard'>

      <div className='billboard__poster'>
        <img
          className='poster'
          src={content.poster}
          alt='poster'
        />
      </div>

      <div className='billboard__date'>
        {content.date}
      </div>

      <div className='billboard__text'>

        <div className='billboard__profits'>
          <div className='profits__title'>
            {content.text.profits.title}
          </div>
          <ul className='profits__items'>
            {content.text.profits.items.map((item) => {
              return (
                <li className='profits__item'>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>

        <div className='billboard__howToUse'>
          <div className='howToUse__title'>
            {content.text.howToUse.title}
          </div>
          <ul className='howToUse__items'>
            {content.text.howToUse.items.map((item, index) => {
              return (
                <li className='howToUse__item'>
                  {`${index + 1}.` + item}
                </li>
              )
            })}
          </ul>
        </div>

        <div className='billboard__info'>
          {content.text.info}
        </div>

        <div className='billboard__links'>
          {content.text.links.map(item => {
            return (
              <div className='billboard__linkWrapper'>
                <a href={item.src} className='billboard__link'>
                  {item.title}
                </a>
              </div>
            )
          })}
        </div>

        <div className='billboard__terms'>
          {content.text.terms}
        </div>

      </div>
    </div>
  );
}

export default Billboard;