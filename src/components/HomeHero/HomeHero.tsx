import React, { CSSProperties, useEffect, useState } from 'react';

import ASSETS_BASE_URL from '../../shared/assetsBase';
import { randomInt } from '../../shared/utils/randomInt';
import BubbleBackground from '../backgrounds/BubbleBackground/BubbleBackground';
import SnowfallBackground from '../backgrounds/SnowfallBackground/SnowfallBackground';
import GreetingCommand from './GreetingCommand/GreetingCommand';
import classes from './HomeHero.module.css';

const BACKGROUNDS = [BubbleBackground, SnowfallBackground];

const HomeHero: React.FC = () => {
  const [statusStyle, setStatusStyle] = useState<CSSProperties>({
    display: 'none',
  });
  const [statusContainerStyle, setStatusContainerStyle] =
    useState<CSSProperties>({
      borderRadius: '50%',
      padding: '0',
    });

  const [backgroundIndex, setBackgroundIndex] = useState(-1);

  useEffect(() => {
    if (BACKGROUNDS.length > 0) {
      setBackgroundIndex(randomInt(0, BACKGROUNDS.length - 1));
    } else {
      setBackgroundIndex(-1);
    }
  }, []);

  return (
    <section
      className={classes.Container}
      onClick={() =>
        setBackgroundIndex((prev) => (prev + 1) % BACKGROUNDS.length)
      }
    >
      {backgroundIndex !== -1
        ? React.createElement(BACKGROUNDS[backgroundIndex])
        : null}
      <div className={classes.HeroImageWrapper}>
        <img
          className={classes.HeroImage}
          src={new URL('home/hero/jerry-zheng.png', ASSETS_BASE_URL).toString()}
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
          Seeking SWE internships!
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
