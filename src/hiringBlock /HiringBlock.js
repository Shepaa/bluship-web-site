import style from './HiringBlock.module.scss';
import starIcon from '../assets /star.svg';

export const HiringBlock = () => {
  return (
      <div className={style.hiringBlockContainer}>
        <div className={style.hiringBlockTitle}>
          <div className={style.hiringBlockTitleIcon}>
            <img src={starIcon} alt="Star"/>
          </div>
          WE ARE HIRING!
        </div>
        <div className={style.hiringBlockSubTitle}>
          VIEW OPEN ROLES
        </div>
      </div>
  );
};