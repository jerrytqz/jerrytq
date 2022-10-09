import React, { useEffect, useRef, useState } from 'react';

import BubbleBackground from '../../shared/UI/BubbleBackground/BubbleBackground';
import classes from './Hero.module.css';

const WRITE_DELAY = 50;
const DELETE_DELAY = 50;
const START_DELETE_DELAY = 5000;

const Hero = (props) => {
    const command = useRef(null);
    const [typingBarBlink, setTypingBarBlink] = useState(false);
    const [lineNumber, setLineNumber] = useState(1);
    const [statusStyle, setStatusStyle] = useState({display: 'none'});
    const [statusContainerStyle, setStatusContainerStyle] = useState({
        borderRadius: '50%', 
        padding: '0'
    });

    useEffect(() => {
        let writeTimeout = null;
        let deleteTimeout = null;
        let startDeleteTimeout = null;

        const typeWriter = (i, j) => {
            if (i < props.content.commands[j].length) {
                command.current.textContent += props.content.commands[j].charAt(i);
                writeTimeout = setTimeout(() => typeWriter(++i, j), WRITE_DELAY);
            } else {
                setTypingBarBlink(true);
                startDeleteTimeout = setTimeout(() => typeDeleter(i, j), START_DELETE_DELAY); 
            }
        };
        
        const typeDeleter = (i, j) => {
            setTypingBarBlink(false);
            if (i > 0) {
                command.current.textContent = props.content.commands[j].slice(0, i - 1);
                deleteTimeout = setTimeout(() => typeDeleter(--i, j), DELETE_DELAY);
            } else {
                setLineNumber(prev => (prev === props.content.commands.length ? 1 : prev + 1));
                typeWriter(i, j === props.content.commands.length - 1 ? 0 : ++j);
            }
        };

        typeWriter(0, 0);

        return () => { 
            clearTimeout(writeTimeout); 
            clearTimeout(deleteTimeout);
            clearTimeout(startDeleteTimeout);
        };
    }, [props.content.commands]);

    return (
        <section className={classes.Container}>
            <BubbleBackground/>
            <img className={classes.HeroImage} src={props.content.heroImage} alt="Jerry Zheng" draggable={false}/>
            <h1 className={classes.PrimaryText}>{props.content.primaryText}</h1>
            <div className={classes.CommandContainer}>
                <code className={classes.LineNumber}>{lineNumber} &nbsp;</code>
                <code className={classes.Command} ref={command}/>
                <div className={`${classes.TypingBar} ${typingBarBlink && classes.Blink}`}/>
            </div>
            <div className={classes.StatusContainer} style={statusContainerStyle}
                onMouseEnter={() => { setStatusContainerStyle({borderRadius: '10px', padding: '3px 6px'}); setStatusStyle({display: 'block'}); }} 
                onMouseLeave={() => { setStatusContainerStyle({borderRadius: '50%', padding: '0'}); setStatusStyle({display: 'none'}); }}
            >
                {props.content.status.emoji}
                <div className={classes.StatusMessage} style={statusStyle}>
                    {props.content.status.message}
                </div>
            </div>
        </section> 
    )
}

export default Hero;
