import { useState } from 'react';

import ASSETS_BASE_URL from '../../shared/assetsBase';
import BubbleBackground from '../backgrounds/BubbleBackground/BubbleBackground';
import GreetingCommand from './GreetingCommand/GreetingCommand';
import classes from './HomeHero.module.css';

const HomeHero = () => {
  const [statusStyle, setStatusStyle] = useState({ display: 'none' });
  const [statusContainerStyle, setStatusContainerStyle] = useState({
    borderRadius: '50%',
    padding: '0',
  });

  return (
    <section className={classes.Container}>
      <BubbleBackground />
      <div className={classes.HeroImageWrapper}>
        <img
          className={classes.HeroImage}
          src={new URL('home/hero/jerry-zheng.png', ASSETS_BASE_URL)}
          alt="Jerry Zheng"
          draggable={false}
        />
      </div>
      <h1 className={[classes.PrimaryText, classes.Min768None].join(' ')}>
        Jerry Zheng
      </h1>
      <h1 className={[classes.PrimaryText, classes.Min768Block].join(' ')}>
        Jerry TQ Zheng
      </h1>
      <GreetingCommand />
      <div
        className={[classes.StatusContainer, classes.Min768Flex].join(' ')}
        style={statusContainerStyle}
        onMouseEnter={() => {
          setStatusContainerStyle({ borderRadius: '10px', padding: '3px 6px' });
          setStatusStyle({ display: 'block' });
        }}
        onMouseLeave={() => {
          setStatusContainerStyle({ borderRadius: '50%', padding: '0' });
          setStatusStyle({ display: 'none' });
        }}
      >
        ✨
        <div className={classes.StatusMessage} style={statusStyle}>
          Seeking Summer 2025 internships!
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
