import React, { useRef } from 'react';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import classes from './BubbleBackground.module.css';

const BubbleBackground = () => {
  const ANIMATION_DELAY = useRef(Math.random() * -10);
  const { width } = useWindowDimensions();

  const options = [];
  if (width >= 768)
    options.push(
      ...[
        { key: 1, val: 10 },
        { key: 2, val: 14 },
        { key: 3, val: 23 },
        { key: 4, val: 18 },
        { key: 5, val: 16 },
        { key: 6, val: 11 },
        { key: 7, val: 12 },
        { key: 8, val: 24 },
      ],
    );
  if (width >= 992)
    options.push(
      ...[
        { key: 9, val: 19 },
        { key: 10, val: 18 },
        { key: 11, val: 16 },
        { key: 12, val: 19 },
        { key: 13, val: 20 },
        { key: 14, val: 15 },
        { key: 15, val: 25 },
      ],
    );
  if (width >= 1200)
    options.push(
      ...[
        { key: 16, val: 18 },
        { key: 17, val: 21 },
        { key: 18, val: 22 },
        { key: 19, val: 13 },
        { key: 20, val: 26 },
        { key: 21, val: 17 },
        { key: 22, val: 13 },
        { key: 23, val: 28 },
      ],
    );

  const bubbles = [];
  for (let i = 0; i < options.length; i++) {
    bubbles.push(
      <span
        key={options[i].key}
        style={{ '--i': options[i].val, '--j': ANIMATION_DELAY.current }}
        className={classes.Bubble}
      />,
    );
  }

  return <div className={classes.Container}>{bubbles}</div>;
};

export default React.memo(BubbleBackground);
