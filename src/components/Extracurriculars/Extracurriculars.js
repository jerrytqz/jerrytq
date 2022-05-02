import React from 'react';

import classes from './Extracurriculars.module.css'; 
import Extracurricular from './Extracurricular/Extracurricular'; 
import SectionHeader from '../SectionHeader/SectionHeader'; 

import grouseMountain from '../../assets/Extracurriculars/GrouseMountain.jpeg'; 
import kumon from '../../assets/Extracurriculars/Kumon.jpeg'; 
import cadets from '../../assets/Extracurriculars/Cadets.jpeg'; 
import mathChallengers from '../../assets/Extracurriculars/MathChallengers.jpeg'; 
import surrey from '../../assets/Extracurriculars/Surrey.jpeg'; 
import firehawks from '../../assets/Extracurriculars/Firehawks.jpeg'; 

const Extracurriculars = () => {
    const titleA = "Grouse Mountain"; 
    const descriptionA = 
        `I was part of Grouse Mountain's Leaders in Training program as an assistant ski instructor.
        For three consecutive winter seasons from December one year to April the next, 
        I helped ski instructors teach lessons and supervise children. I have over 240 hours of 
        volunteer experience in this program.`; 

    const titleB = "Kumon"; 
    const descriptionB = 
        `I work as a mathematics tutor at the Walnut Grove Kumon Centre, where I teach students mathematics
        ranging from arithmetic to calculus. I currently have over 350 hours of teaching experience.`; 

    const titleC = "307 RCSCC Mariner"; 
    const descriptionC = 
        `I was a Petty Officer First Class in 307 RCSCC Mariner, a sea cadet corp. I led divisions, 
        taught lessons, supervised training nights, and raised money for the Royal Canadian
        Legion through poppy tagging. I have been awarded the Service Medal and certified 
        Music Proficiency Level - Basic (Clarinet).`; 

    const titleD = "Math Challengers"; 
    const descriptionD = 
        `I was a prominent member of Fraser Heights Secondary's Math Challengers A Team in Grade 8, 9, and 10. I 
        participated in a total of 3 regional and 2 provincial competitions, winning team first place 2 times
        in the Fraser Valley as well as individual fifth and seventh place.`; 

    const titleE = "City of Surrey"; 
    const descriptionE = 
        `I am a Special Events Volunteer for the City of Surrey, and I assist in events such as the
        Surrey International Children's Festival by helping set up, maintain, and clean up activities.`; 

    const titleF = "FHSS Coding Club"; 
    const descriptionF = 
        `I am an executive member of Fraser Heights Secondary School's Coding Club. I plan and host
        weekly meetings to foster interest in computer science, teaching C++ and helping members 
        create their own coding projects.`; 

    return (
        <div className={classes.Container}>
            <SectionHeader title="Extracurriculars"/>
            <section className={classes.Extracurriculars}>
                <Extracurricular title={titleA} image={grouseMountain} description={descriptionA} alt="Grouse Mountain"/>
                <Extracurricular title={titleB} image={kumon} description={descriptionB} alt="Kumon"/>
                <Extracurricular title={titleC} image={cadets} description={descriptionC} alt="307 RCSCC Mariner"/>
                <Extracurricular title={titleD} image={mathChallengers} description={descriptionD} alt="Math Challengers"/>
                <Extracurricular title={titleE} image={surrey} description={descriptionE} alt="City of Surrey"/>
                <Extracurricular title={titleF} image={firehawks} description={descriptionF} alt="Fraser Heights Firehawks"/>
            </section> 
        </div>
    )
}

export default Extracurriculars;