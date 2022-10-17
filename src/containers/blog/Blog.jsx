import React from 'react';
import './blog.scss';
import { Block } from '../../components';
import formula from '../../assets/Formula 1.svg';
import electric from '../../assets/Pattern_Electric_Lines.svg';

const Blog = () => {
  return (
    <div className='crypto__blog'>
      <div className='crypto__blog-blog1'>
        <Block
          title={'Spot & Margin'}
          text={'Trade 200+ pairs with up to 10x leverage'}
          imgUrl={formula}
          reverseCol={true}
        >
          <div className='crypto__block-content-text'>
            <p>
              Trade
              <span className='gradient__text'> 200+ </span>
              pairs with up to 10x leverage
            </p>
          </div>
        </Block>
      </div>
      <div className='crypto__blog-blog2'>
        <div className='crypto__blog-blog2_two'>
          <Block title={'Derivatives'}>
            <div className='crypto__block-content-text'>
              <p>40+ quarterly futures and contracts</p>
            </div>
          </Block>
          <Block title={'Trading Arena'}>
            <div className='crypto__block-content-text'>
              <p>Prize pools worth up to</p>
              <p>USD 1,000,000</p>
            </div>
          </Block>
        </div>
        <div className='crypto__blog-blog2_one'>
          <Block
            title={'mobile app'}
            text={'Trade anytime, anywhere'}
            imgUrl={electric}
            reverseRow={true}
          >
            <div className='crypto__block-content-text'>
              <p>Trade anytime,</p>
              <p>anywhere</p>
            </div>
          </Block>
        </div>
      </div>
    </div>
  );
};

export default Blog;