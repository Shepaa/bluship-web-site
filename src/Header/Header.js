import React, {useState} from 'react';
import style from './Header.module.scss';
import headerLogo from '../assets /headerLogo.svg';
import burgerIcon from '../assets /burgerICON.png';
import burgerIconActive from '../assets /activeMenuBtn.png';
import linkedIn from '../assets /LinkedIn - Negative.png';
import twitterLogo from '../assets /Twitter - Negative.png';
import materialLogo from '../assets /material-symbols_mail-rounded.png';
import calendarLogo from "../assets /calendar_plus.png"
import {BookBtn} from '../components /bookBtn/bookBtn';

export const Header = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
      <div>
        <div className={style.headerWrapper}>
          <div className={style.headerLogo}>
            <img src={headerLogo} alt="headerLogo"/>
          </div>
          <div className={style.headerLinks}>
            <a href="#">SERVICES</a>
            <a href="#">NETWORK</a>
            <a href="#">TEAM</a>
          </div>
          <div className={style.headerSmallBookButton}>
            <img src={calendarLogo} alt=""/>
          </div>
          <BookBtn/>
          <div className={style.headerButtonBurgerBtn}
               onClick={handleButtonClick}>
            <img src={isButtonActive ? burgerIconActive : burgerIcon}
                 alt="Burger Menu"/>
          </div>
        </div>

        {isButtonActive && (
            <div style={{background: `linear-gradient(180deg, #1E071F 0%, #0B091C 100%)` }}>
              <div className={style.hiddenHeaderLinks}>
                <a href="#">SERVICES</a>
                <a href="#">NETWORK</a>
                <a href="#">TEAM</a>
              </div>
              <div className={style.headerSocialMediaWrapper}>
                <div className={style.headerSocialMediaTitle}>
                  CHECK OUR SOCIALS:
                </div>
                <div className={style.socialMediaCartWrapper}>
                  <div className={style.socialMediaCart}>
                    <a href="#">
                      <img src={linkedIn} alt="linkedInLogo"/></a>
                  </div>
                  <div className={style.socialMediaCart}>
                    <a href="#">
                      <img src={twitterLogo} alt="twitterLogo"/></a>
                  </div>
                  <div className={style.socialMediaCart}>
                    <a href="#">
                      <img src={materialLogo} alt="linkedInLogo"/></a>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};
