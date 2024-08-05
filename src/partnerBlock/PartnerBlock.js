import style from './PartnerBlock.module.scss';
import UbisoftImg from "../assets /Ubisoft.png"
import Grizzly from "../assets /Grizly.png"
import Early from "../assets /EarlyAccess.png"
import Spoils from "../assets /Spoils.png"
import Habbo from "../assets /Habbo.png"
import GCDSImg from "../assets /GSDS.png"
import WorkAdv from "../assets /workAdv.png"
import realLabsImg from "../assets /Real.png"
export const PartnerBlock = () => {
  return (
      <div className={style.wrapper}>
        <div className={style.title}>
          Some Of The Brands <span className={style.blue}>That Trust Us!</span>
        </div>
        <div className={style.partnerBlockWrapper}>
          <div className={style.firstLine}>
            <div className={style.partnerCart}>
              <img src={UbisoftImg} alt="UbisoftImg" className={style.ubisoft}/>
            </div>
            <div className={style.partnerCart}>
              <img src={Grizzly} alt="UbisoftImg" className={style.grizzly}/>
            </div>
            <div className={style.partnerCart}>
              <img src={Early} alt="UbisoftImg" className={style.early}/>
            </div>
            <div className={style.partnerCart}>
              <img src={Spoils} alt="UbisoftImg" className={style.spoils}/>
            </div>
          </div>
          <div className={style.secondLine}>
            <div className={style.partnerCart}>
              <img src={Habbo} alt="UbisoftImg" className={style.habbo}/>
            </div>
            <div className={style.partnerCart}>
              <img src={GCDSImg} alt="UbisoftImg" className={style.gcds}/>
            </div>
            <div className={style.partnerCart}>
              <img src={WorkAdv} alt="UbisoftImg" className={style.workAdv}/>
            </div>
            <div className={style.partnerCart}>
              <img src={realLabsImg} alt="UbisoftImg" className={style.realLabs}/>
            </div>
          </div>
        </div>
      </div>
  );
};