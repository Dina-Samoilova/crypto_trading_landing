import React from 'react';
import './future.scss';
import { Futures } from '../../components';

const Future = () => {
  return (
    <div className='crypto__future'>
      <Futures />

      <div className='crypto__future-description'>
        <h2 className='crypto__future-description_title'>
          The future Cryptocurrency trading
          <span className='gradient__text'> platform</span>
        </h2>

        <p className='crypto__future-description_text'>
          Take advantage of time and sales, futures spread orders and depth
          trader — plus, trade directly from charts.
        </p>

        <button type='button'>Learn more</button>
      </div>
    </div>
  );
};

export default Future;