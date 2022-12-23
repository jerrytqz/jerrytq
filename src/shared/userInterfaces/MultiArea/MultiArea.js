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
                        style={index === areaIndex ? {borderBottom: '1px solid #393ae7', backgroundColor: '#eeeeee'} : null} 
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
