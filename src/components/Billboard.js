import React from 'react';
import '../css/Billboard.css'

const Billboard = ({ data }) => {

  const content = data.content

  return (
    <div className='billboard'>

      <div className='billboard__poster'>
        <img
          className='img-poster'
          src={content.poster}
          alt='poster'
        />
      </div>

      <div className='billboard__date'>
        {content.date}
      </div>

      <div className='billboard__text'>

        <div className='billboard__profits text-wide mt20'>
          <div className='billboard__profits__title'>
            {content.text.profits.title}
          </div>
          <ul className='billboard__profits__list'>
            {content.text.profits.items.map((item) => {
              return (
                <li className='billboard__profits__item'>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>

        <div className='billboard__usage text-wide mt20'>
          <div className='billboard__usage__title'>
            {content.text.howToUse.title}
          </div>
          <ul className='billboard__usage__list'>
            {content.text.howToUse.items.map((item, index) => {
              return (
                <li className='billboard__usage__item'>
                  {`${index + 1}.` + item}
                </li>
              )
            })}
          </ul>
        </div>

        <div className='billboard__info text-regular mt20'>
          {content.text.info}
        </div>

        <div className='billboard__links mt20'>
          {content.text.links.map(item => {
            return (
              <div className='link-wrapper mt20'>
                <a href={item.src} className='link'>
                  {item.title}
                </a>
              </div>
            )
          })}
        </div>

        <div className='billboard__terms text-xs mt50'>
          {content.text.terms}
        </div>

      </div>
    </div>
  );
}

export default Billboard;