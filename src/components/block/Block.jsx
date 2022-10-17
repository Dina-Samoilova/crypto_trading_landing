import React from 'react';
import './block.scss';

const Block = ({ title, imgUrl, reverseRow, reverseCol, children }) => {
  return (
    <div
      className={
        reverseRow
          ? 'crypto__block-reverse-row'
          : reverseCol
          ? 'crypto__block-reverse-col'
          : 'crypto__block'
      }
    >
      <div className='crypto__block-img'>
        {imgUrl && (
          <img
            src={imgUrl}
            alt='formules'
          />
        )}
      </div>

      <div className='crypto__block-content'>
        <h4 className='crypto__block-content-title'>{title}</h4>
        {children}
        <button
          type='button'
          className='crypto__block-content-link'
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Block;