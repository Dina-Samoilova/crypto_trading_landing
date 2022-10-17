import React from 'react';
import { GoTriangleRight } from 'react-icons/go';
import './about.scss';
import { Graf } from '../../components';

const About = () => {
  return (
    <div className='crypto__about'>
      <div className='crypto__about-titles'>
        <h4 className='crypto__about-titles_subtitle'>about us</h4>
        <h2 className='crypto__about-titles_title'>Global technologies</h2>
      </div>

      <div className='crypto__about-content'>
        <Graf />
        <div className='crypto__about-content_container'>
          <h5 className='crypto__about-content_container-title'>Level 1</h5>
          <div className='crypto__about-content_container-text'>
            <GoTriangleRight color='#0a6fff' />
            <p>
              Deploy a multi-legged futures strategy by simultaneously placing
              orders to buy and sell from the same order ticket.
            </p>
          </div>
          <div className='crypto__about-content_container-text'>
            <GoTriangleRight color='#ff2b77' />
            <p>
              Place and manage orders based on the Level 2 order book, which
              provides a live display of all bids and offers waiting to be
              executed.
            </p>
          </div>
          <button type='button'>Start Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;