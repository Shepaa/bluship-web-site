import {HiringBlock} from './hiringBlock /HiringBlock';
import style from './App.module.scss';
import {Header} from './Header/Header';
import {HeroSection} from './HeroSection/HeroSection';
import {PartnerBlock} from './partnerBlock/PartnerBlock';
import {Slogan} from './slogan/Slogan';
import {Line} from './line/Line';

function App() {
  return (
      <div>
        <HiringBlock/>
        <div className={style.AppContainer}>
          <Header/>
          {/*<HeroSection/>*/}
          <PartnerBlock/>
          <Slogan/>
          <Line/>
        </div>
      </div>
  );
}

export default App;
