import React, {useEffect} from 'react';

import classes from './ProfileMain.module.css'; 
import image from '../../assets/ProfileMain.jpeg'; 

const ProfileMain = () => {
    let i = 0;
    let j = 0; 
    const speed = 200; 
    const delay = 1000; 
    const greetings = ['Hello!', 'Bonjour!', 'こんにちは!', '你好!', '안녕하세요!']
    let greeting = React.createRef(); 

    const typeWriter = () => {
        try {
            if (i < greetings[j].length) {
                greeting.current.innerText += greetings[j].charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
            else setTimeout(typeDeleter, delay); 
        } 
        catch {
            return; 
        } 
    }

    const typeDeleter = () => {
        try {
            if (i > 0) {
                greeting.current.innerText = greetings[j].slice(0, i-1)
                i--;
                setTimeout(typeDeleter, speed);
            }
            else {
                if (j < greetings.length-1) {
                    j++; 
                    typeWriter(); 
                }
                else {
                    j = 0;
                    typeWriter(); 
                }
            }
        }
        catch {
            return; 
        }
    }

    useEffect(() => {
        typeWriter(); 
    })

    return (
        <section className={classes.Container}>
            <div style={{padding: "40px 0"}}>
                <img className={classes.Image} src={image} alt="Jerry Zheng"/>
            </div>
            <div className={classes.TextContainer}>
                <div className={classes.DynamicText}>
                    <div className={classes.FirstText} ref={greeting}></div>
                    <div className={classes.TypingBar}/>
                    {/* <div className={classes.FirstText} style={{opacity: "0"}}>l</div> */}
                </div>
                <div className={classes.SecondText}>My name is <strong>Jerry Zheng</strong>.</div>
            </div>
        </section> 
    )
}

export default ProfileMain;
