import React from 'react';
import style from './Slogan.module.scss';
import blushipLabel from '../assets /BlushipLabel.png';

export const Slogan = () => {
  return (
      <div className={style.wrapper}>
        <div className={style.extraMileSection}>
          <div className={`${style.line} ${style.firstLine}`}>GOING THE EXTRA MILE</div>
          <div  className={`${style.line} ${style.secondLine}`}>SEES NO SETBACKS WHEN YOU'RE FLYING</div>
          <div className={style.lastLine}>
          <div className={style.line}>
            <span>WITH</span>
          </div>
          <div className={style.logoContainer}>
            <img src={blushipLabel} alt="Bluship Label" />
          </div>
          </div>
        </div>
      </div>
  );
};
