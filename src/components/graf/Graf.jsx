import React from 'react';
import './graf.scss';

const Graf = () => {
  return (
    <div className='crypto__graf'>
      <div className='crypto__graf-lines'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='crypto__graf-container'>
        <div className='crypto__graf-container_numbers'>
          <div>10</div>
          <div>20</div>
          <div>30</div>
          <div>40</div>
        </div>
      </div>
      <div className="crypto__graf-x-line"></div>
      <div className='crypto__graf-blue-lines'>
        <div className='crypto__graf-blue-lines_1'></div>
        <div className='crypto__graf-blue-lines_2'></div>
        <div className='crypto__graf-blue-lines_3'></div>
      </div>
      <div className='crypto__graf-green-lines'>
        <div className='crypto__graf-green-lines_4'></div>
        <div className='crypto__graf-green-lines_5'></div>
        <div className='crypto__graf-green-lines_6'></div>
      </div>
    </div>
  );
};

export default Graf;