import React, { useEffect, useRef, useState } from 'react';

import { ASSETS_BASE_URL } from '../../shared/urlBases';
import BubbleBackground from '../../shared/userInterfaces/BubbleBackground/BubbleBackground';
import classes from './HomeHero.module.css';

const WRITE_DELAY = 50;
const DELETE_DELAY = 50;
const START_DELETE_DELAY = 5000;
const COMMANDS = [
  'System.out.println("Hello World!");',
  'print("I love programming!")',
  'std::cout << "I like watching anime!";',
  'printf("I also like playing video games!");',
  "console.log('Chocolate is my favorite food!');",
];

const HomeHero = () => {
  const command = useRef(null);
  const [heroImageStyle, setHeroImageStyle] = useState({ display: 'none' });
  const [typingBarBlink, setTypingBarBlink] = useState(false);
  const [lineNumber, setLineNumber] = useState(1);
  const [statusStyle, setStatusStyle] = useState({ display: 'none' });
  const [statusContainerStyle, setStatusContainerStyle] = useState({
    borderRadius: '50%',
    padding: '0',
  });

  useEffect(() => {
    let writeTimeout = null;
    let deleteTimeout = null;
    let startDeleteTimeout = null;

    const typeWriter = (i, j) => {
      if (i < COMMANDS[j].length) {
        if (command.current)
          command.current.textContent += COMMANDS[j].charAt(i);
        writeTimeout = setTimeout(() => typeWriter(++i, j), WRITE_DELAY);
      } else {
        setTypingBarBlink(true);
        startDeleteTimeout = setTimeout(
          () => typeDeleter(i, j),
          START_DELETE_DELAY,
        );
      }
    };

    const typeDeleter = (i, j) => {
      setTypingBarBlink(false);
      if (i > 0) {
        if (command.current)
          command.current.textContent = COMMANDS[j].slice(0, i - 1);
        deleteTimeout = setTimeout(() => typeDeleter(--i, j), DELETE_DELAY);
      } else {
        setLineNumber((prev) => (prev === COMMANDS.length ? 1 : prev + 1));
        typeWriter(i, j === COMMANDS.length - 1 ? 0 : ++j);
      }
    };

    typeWriter(0, 0);

    return () => {
      clearTimeout(writeTimeout);
      clearTimeout(deleteTimeout);
      clearTimeout(startDeleteTimeout);
    };
  }, []);

  return (
    <section className={classes.Container}>
      <BubbleBackground />
      <div className={classes.HeroImageWrapper}>
        <img
          onLoad={() => setHeroImageStyle({ display: 'block' })}
          style={heroImageStyle}
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
      <div className={[classes.CommandContainer, classes.Min768Flex].join(' ')}>
        <code className={classes.LineNumber}>{lineNumber} &nbsp;</code>
        <code className={classes.Command} ref={command} />
        <div
          className={`${classes.TypingBar} ${typingBarBlink ? classes.Blink : ''}`.trim()}
        />
      </div>
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
