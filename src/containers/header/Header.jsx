import React from 'react';
import './header.scss';
import algorithm from '../../assets/Algorithm.svg';

const Header = () => {
  return (
    <div className='crypto__header'>
      <div className='crypto__header-content'>
        <h3 className='crypto__header-content_subtitle'>crypto trading</h3>
        <h1 className='crypto__header-content_title'>
          Engineers Meet
          <span className='gradient__text'> Traders _</span>
        </h1>
        <p>
          Advanced crypto algorithmic trading and efficient cross-chain
          execution, at scale.
        </p>

        <button type='button'>
          <span>Learn More</span>
          <div className="arrow__cycle">
            <div className="arrow__cycle-down"></div>
          </div>
        </button>
      </div>

      <div className='crypto__header-image'>
        <img
          src={algorithm}
          alt='algorithm'
        />
      </div>
    </div>
  );
};

export default Header;