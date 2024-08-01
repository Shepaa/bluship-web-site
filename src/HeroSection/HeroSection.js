import style from './HeroSection.module.scss';
import React from 'react';
import rocketImg from '../assets /fs_rocket (1).png';
import rocketImgTablet from '../assets /fs_rocket_tablet.png';
import rocketImgMobile from '../assets /fs_rocket_mobile.png';


export const HeroSection = () => {

  return (
      <div className={style.wrapper}>
        <div className={style.bannerContainer}>
          <div className={style.title}>
            <span className={style.blue}>BORN</span> <span className={style.colorFix}> IN WEB2</span><br/>
            <span className={style.purple}>BUILT</span> <span className={style.colorFix}>FOR WEB3</span>
          </div>
          <div className={`${style.subTitle}`}>
            We know building and growing a community can be tough. We're here
            to alleviate all the trial & error. With our expertise, you will
            confidently soar into growth. Say goodbye to "flying blind.”
          </div>
          <div className={style.headerButton}>
            <a href="#">BOOK NOW</a>
          </div>
        </div>
        <div className={style.rocketImgContainer}>
          <img src={rocketImg} className={style.desktopImg}
               alt="Rocket for PC"/>
          <img src={rocketImgTablet} className={style.rocketImgTablet}
               alt="Rocket for Tablet"/>
          <img src={rocketImgMobile} className={style.rocketImgMobile}
               alt="Rocket for Mobile"/>
        </div>
      </div>
  );
};
