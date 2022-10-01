import React, { useEffect, useRef, useState } from 'react';

import classes from './Hero.module.css';

const COMMANDS = [
    'System.out.println("Hello World!");',
    'print("I love Python!")', 
    'std::cout << "I like programming!";',
    'console.log(\'I like watching anime!\');',
    'printf("I love math!");'
];
const WRITE_DELAY = 50;
const DELETE_DELAY = 50;
const START_DELETE_DELAY = 5000;

const Hero = (props) => {
    const command = useRef(null);
    const [typingBarBlink, setTypingBarBlink] = useState(false);
    const [lineNumber, setLineNumber] = useState(1);
    const [socialMediaStyle, setSocialMediaStyle] = useState({display: 'none'});
    const [socialMediaContainerStyle, setSocialMediaContainerStyle] = useState({
        borderRadius: '50%', 
        padding: '0'
    });

    useEffect(() => {
        let writeTimeout = null;
        let deleteTimeout = null;
        let startDeleteTimeout = null;

        const typeWriter = (i, j) => {
            if (i < COMMANDS[j].length) {
                command.current.textContent += COMMANDS[j].charAt(i);
                writeTimeout = setTimeout(() => typeWriter(++i, j), WRITE_DELAY);
            } else {
                setTypingBarBlink(true);
                startDeleteTimeout = setTimeout(() => typeDeleter(i, j), START_DELETE_DELAY); 
            }
        };
        
        const typeDeleter = (i, j) => {
            setTypingBarBlink(false);
            if (i > 0) {
                command.current.textContent = COMMANDS[j].slice(0, i - 1);
                deleteTimeout = setTimeout(() => typeDeleter(--i, j), DELETE_DELAY);
            } else {
                setLineNumber(prev => (prev === COMMANDS.length ? 1 : prev + 1));
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
            <img className={classes.Image} src={props.content.heroImage} alt="Jerry Zheng"/>
            <h1 className={classes.PrimaryText}>Jerry TQ Zheng</h1>
            <div className={classes.CommandContainer}>
                <code className={classes.LineNumber}>{lineNumber} &nbsp;</code>
                <code className={classes.Command} ref={command}/>
                <div className={`${classes.TypingBar} ${typingBarBlink && classes.Blink}`}/>
            </div>
            <div 
                className={classes.SocialMediaContainer} 
                style={socialMediaContainerStyle}
                onMouseEnter={() => {
                    setSocialMediaContainerStyle({borderRadius: '10px', padding: '3px 6px'});
                    setSocialMediaStyle({display: 'block'});
                }} 
                onMouseLeave={() => {
                    setSocialMediaContainerStyle({borderRadius: '50%', padding: '0'});
                    setSocialMediaStyle({display: 'none'});
                }}
            >
                &#10024;
                <div className={classes.SocialMedia} style={socialMediaStyle}>
                    This is just a test for an upcoming feature!
                </div>
            </div>
        </section> 
    )
}

export default Hero;
