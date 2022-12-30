import React from 'react';

import classes from './Course.module.css'; 

const Course = (props) => {
    return (
        <tr style={props.style}>
            <td className={[classes.Data, classes.Min768TableCell].join(' ')}>{props.term.period}</td>
            <td className={classes.Data}>{props.name}</td>
            <td className={classes.Data}>{props.description}</td>
            <td className={classes.Data}>{props.grade || 'TBD'}</td>
        </tr>
    )
}

export default Course;
