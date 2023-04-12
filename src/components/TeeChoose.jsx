import React from 'react'
import styles, { layout } from '../style';
import bobaCups from '../assets/bobaCups.png';
import goArrow1 from '../assets/goArrow1.png';



const TeeChoose = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Create your <span className='text-yellow-400'>BEST BOBA</span>{' '}
          <br className='sm:block hidden' /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau. Arcu tortor,
          purus in mattis at sed integer faucibus. 
        </p>

        <img src={goArrow1} alt='boba-Cups' className='ml-8 w-[40%] h-[40%]' />
      </div>

      <div className={layout.sectionImg}>
        <img src={bobaCups} alt='boba-Cups' className='w-[90%] h-[90%]' />
      </div>
    </section>
  );
};

export default TeeChoose