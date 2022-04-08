import React, {useState} from 'react';

import classes from './Achievements.module.css'; 
import Achievement from './Achievement/Achievement'; 
import SectionHeader from '../SectionHeader/SectionHeader'; 

import AP from '../../assets/Achievements/AP.jpeg'; 
import SAT from '../../assets/Achievements/SAT.jpeg'; 
import SIMUW from '../../assets/Achievements/SIMUW.jpeg'; 
import CIMC from '../../assets/Achievements/CIMC.jpeg'; 

const Achievements = () => {
    const slideshow = [
        <Achievement image={AP} description="5 on 7 AP Exams"/>, 
        <Achievement image={SAT} description="1550 SAT, 800 on 2 SAT Subject Tests"/>,
        <Achievement image={CIMC} description="CIMC 2019 Group V Honour Roll"/>,
        <Achievement image={SIMUW} description="SIMUW 2019 Invitee & Participant"/>
    ];
    let [i, setIndexI] = useState(slideshow.length - 1); 
    let [j, setIndexJ] = useState(0); 
    let [k, setIndexK] = useState(1); 

    const nextSlide = () => {
        if (i < slideshow.length - 1) {
            setIndexI(i+1); 
        }
        else setIndexI(0); 

        if (j < slideshow.length - 1) {
            setIndexJ(j+1); 
        }
        else setIndexJ(0); 

        if (k < slideshow.length - 1) {
            setIndexK(k+1); 
        }
        else setIndexK(0); 
    }

    const prevSlide = () => {
        if (i > 0) {
            setIndexI(i-1); 
        }
        else setIndexI(slideshow.length - 1); 

        if (j > 0) {
            setIndexJ(j-1); 
        }
        else setIndexJ(slideshow.length - 1); 

        if (k > 0) {
            setIndexK(k-1); 
        }
        else setIndexK(slideshow.length - 1); 
    }

    let altStyling = {
        margin: '0',
        height: '100px',
        width: '100px',
        fontSize: '0'
    }
    
    return (
        <>
            <SectionHeader title="Achievements/Certifications"/>
            <div className={classes.SlideshowContainer}>
                <button className={classes.PrevButton} onClick={prevSlide}>&#8249;</button>
                <div className={classes.Slideshow}>
                    <div className={classes.AchievementWrapper} style={altStyling}>{slideshow[i]}</div>
                    <div className={classes.AchievementWrapper}>{slideshow[j]}</div>
                    <div className={classes.AchievementWrapper} style={altStyling}>{slideshow[k]}</div>
                </div>
                <button className={classes.NextButton} onClick={nextSlide}>&#8250;</button>
            </div>
        </>
    )
}

export default Achievements;
