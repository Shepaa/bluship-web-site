import React from "react";
import style from "./Slogan.module.scss";
import bullShipLabel from '../assets /BlushipLabel.png'; // Проверьте правильность пути к изображению

export const Slogan = () => {
  return (
      <div className={style.wrapper}>
        <div className={style.extraMileSection}>
          <div className={style.line}>GOING THE EXTRA MILE</div>
          <div className={style.line}>SEES NO SETBACKS WHEN YOU'RE FLYING</div>
          <div className={`${style.line} ${style.extraSpacing}`}>
            WITH
            <div className={style.highlight}>
              <img src={bullShipLabel} alt="Bluship Label"/>
            </div>
          </div>
        </div>
      </div>
  );
};
