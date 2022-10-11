import React from 'react'; 
import classes from './BubbleBackground.module.css';

const OPTIONS = [11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 15, 25, 18, 21, 22, 13, 26, 17, 13, 28];
const bubbles = [];

for (let i = 0; i < OPTIONS.length; i++) {
    bubbles.push(<span key={i} style={{'--i': OPTIONS[i]}} className={classes.Bubble}/>);
}

const BubbleBackground = () => {
    return (
        <div className={classes.Container}>
            {bubbles}
        </div>
    );
};

export default React.memo(BubbleBackground); 
