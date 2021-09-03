import React from 'react';
import '../../css/Breadcrumb.css'

const Breadcrumb = ({ steps }) => {

  return (
    <div className='breadcrumb'>
      {steps.map((step, index) => {
        return (
          <span
            className='breadcrumb__item'
            key={Math.random() + step[0]}
          >
            {<span className='breadcrumb__link'>
              {step}
            </span>}
            {index < steps.length - 1 ? ' . ' : null}
          </span>
        )
      })}
    </div>
  );

}

export default Breadcrumb;