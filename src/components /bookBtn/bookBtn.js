import style from './bookBtn.module.scss';
import React from 'react';

export const BookBtn = () => {
  return (
      <div className={style.headerButton}>
        <a href="#">BOOK NOW</a>
      </div>
  );
};