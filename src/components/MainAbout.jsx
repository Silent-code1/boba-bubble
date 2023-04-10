import React from 'react';
import styles from '../style';
import IngredCard from './IngredCard';
import { ingredients } from '../constants';

const MainAbout = () => {
  return (
    <section
      id='home'
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className={`flex-1 flex flex-col items-center`}>
        <div className='flex justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]'>
            Call it
            <span className='text-gradient'> Bubble tea</span>, milk tea or{' '}
            <br className='sm:block hidden' />{' '}
            <span className='text-gradient'>Boba</span> — it’s delicious!
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[870px] mt-5`}>
          Call it milk tea, boba, bubble tea or pearl milk tea, It’s got many
          names. They all mean that delicious, sweet cold drink that usually
          comes with different toppings. From the chewy boba pearls to the
          scrumptious red bean.
        </p>
      </div>
      <div className='flex-1 flex justify-between items-center'>
        {ingredients.map((card) => (
          <IngredCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default MainAbout;
