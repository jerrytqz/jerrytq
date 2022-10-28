import React from 'react'; 
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
    return <div className={[props.show ? classes.Show : '', classes.Container].join(' ')} onClick={props.onClick}/>;
};

export default Backdrop; 
