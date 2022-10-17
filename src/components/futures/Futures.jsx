import React from 'react';
import './futures.scss';
import { Brick } from '../index';
import logo from '../../assets/logo.svg';

const Futures = () => {
  return (
    <div className='crypto__futures'>
      <div className='crypto__futures-block1'>
        <div className='crypto__futures-block1_two'>
          <Brick
            text={'Artificial Intelligence'}
            fontSize={'14px'}
            lineHeight={'170%'}
          />
          <Brick
            text={'Storage Networks'}
            fontSize={'14px'}
            lineHeight={'170%'}
          />
        </div>
        <div className='crypto__futures-block1_one'>
          <Brick
            text={'P2P Networks'}
            fontSize={'14px'}
            lineHeight={'170%'}
          />
        </div>

        <div className='crypto__futures-block1-line1'></div>
        <div className='crypto__futures-block1-line2'></div>
        <div className='crypto__futures-block1-line3'></div>
      </div>
      <div className='crypto__futures-block2'>
        <Brick
          text={'Public Data'}
          fontSize={'16px'}
          lineHeight={'170%'}
        />
        <Brick
          text={'Encrypted Private Data *'}
          fontSize={'16px'}
          lineHeight={'130%'}
        />

        <div className='crypto__futures-block2-line1'></div>
        <div className='crypto__futures-block2-line2'></div>
        <div className='crypto__futures-block2-line3'></div>
      </div>
      <div className='crypto__futures-block3'>
        <div className='crypto__futures-block3-box'>
          <div className='crypto__futures-block3-box_content'>
            <img
              src={logo}
              alt='logo'
            />
            <p>
              Easy to use digital service and exclusive personal service for our
              active traders
            </p>
          </div>
          <div className='crypto__futures-block3-box_two'>
            <Brick
              text={'Indexing'}
              fontSize={'16px'}
              lineHeight={'170%'}
            />
            <Brick
              text={'API'}
              fontSize={'16px'}
              lineHeight={'170%'}
            />
          </div>

          <div className='crypto__futures-block3-line1'></div>
          <div className='crypto__futures-block3-line2'></div>
        </div>

        <div className='crypto__futures-block3_outside'>
          <div className='crypto__futures-block3_outside-arrow_down'>
            <div></div>
            <div></div>
          </div>
          <div className='crypto__futures-block3_outside-arrow_up'>
            <div></div>
            <div></div>
          </div>
          <div className='crypto__futures-block3_outside-text'>
            <p>Consumers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futures;