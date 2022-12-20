import React, { useRef } from 'react'; 
import classes from './BubbleBackground.module.css';

import useWindowDimensions from '../../hooks/useWindowDimensions';

const BubbleBackground = () => {
    const ANIMATION_DELAY = useRef(Math.random() * -10);
    const { width } = useWindowDimensions(); 

    const options = [];
    if (width >= 768) options.push(...[10, 14, 23, 18, 16, 11, 12, 24]);
    if (width >= 992) options.push(...[19, 18, 16, 19, 20, 15, 25]);
    if (width >= 1200) options.push(...[18, 21, 22, 13, 26, 17, 13, 28]);
    
    const bubbles = [];
    for (let i = 0; i < options.length; i++) {
        bubbles.push(<span key={i} style={{'--i': options[i], '--j': ANIMATION_DELAY.current}} className={classes.Bubble}/>);
    }

    return (
        <div className={classes.Container}>
            {bubbles}
        </div>
    );
};

export default React.memo(BubbleBackground); 
