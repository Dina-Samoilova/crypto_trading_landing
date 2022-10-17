import React from 'react';
import './brick.scss';

const Brick = ({ text, fontSize, lineHeight }) => {
  return (
    <div className='crypto__brick'>
      <p style={{ fontSize: fontSize, lineHeight: lineHeight }}>
        {text}
      </p>
    </div>
  );
};

export default Brick;