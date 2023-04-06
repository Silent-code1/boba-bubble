import React from 'react'
import styles from '../style';

const MainAbout = () => {
  return (
    <section
      id='main'
      className={`w-full flex py-6 justify-between items-center ${styles.paddingY}`}
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <h1>
          Call it <br className='sm:block hidden' />{' '}
          <span className='text-gradient'>Bubble tea</span>, milk tea or{' '}
          <br className='sm:block hidden' />{' '}
          <span className='text-gradient'>Boba</span> — it’s delicious!
        </h1>
        Call it milk tea, boba, bubble tea or pearl milk tea, It’s got many
        names. They all mean that delicious, sweet cold drink that usually comes
        with different toppings. From the chewy boba pearls to the scrumptious
        red bean.
      </div>
    </section>
  );
}

export default MainAbout;