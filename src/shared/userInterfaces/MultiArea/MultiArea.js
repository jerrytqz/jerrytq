import React, { useState } from 'react'; 
import classes from './MultiArea.module.css';

const MultiArea = (props) => {
    const [areaIndex, setAreaIndex] = useState(0);

    return (
        <div>
            <div className={classes.Navigation}>
                {props.areas.map((area, index) => (
                    <div 
                        key={index} 
                        className={classes.Title} 
                        style={index === areaIndex ? {boxShadow: '0 1px 0 #393ae7', backgroundColor: '#eeeeee', zIndex: props.areas.length-index} : {zIndex: props.areas.length-index}} 
                        onClick={() => setAreaIndex(index)}
                    >
                        {area.title}
                    </div>
                ))}
            </div>
            <div className={classes.Body}>
                {props.areas[areaIndex].body}
            </div>
        </div>
    );
};

export default MultiArea; 
