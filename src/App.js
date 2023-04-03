import styles from './style';
import {
  Bubble,
  MainAbout,
  JuiceSirup,
  ReadyGo,
  TeeChoose,
  Footer,
  NavBar,
  OurContacts,
} from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <MainAbout />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <TeeChoose />
        <Bubble />
        <JuiceSirup />
        <ReadyGo />
        <OurContacts />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
