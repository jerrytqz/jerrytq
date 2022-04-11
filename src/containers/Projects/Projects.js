import React, {Component} from 'react'; 

import Project from '../../components/Project/Project'; 

import personalWebsite from '../../assets/Projects/PersonalWebsite.jpeg';
import spin from '../../assets/Projects/Spin.jpeg'; 

class Projects extends Component {
    render() {
        const descriptionA = (
            `I designed and implemented my own personal website from scratch using React, a 
            JavaScript framework for building user interfaces.` 
        );

        const descriptionB = (
            `Spin is a React game website where players can spin a wheel to unbox items, view an 
            inventory of their items, and check up on their profile and stats. I also implemented 
            a Django backend for authentication and access to a database. This project came solely 
            from my imagination and creativity outside of school. While making it, I had to reflect 
            on and revise my code numerous times for best practices and optimization purposes.` 
        );

        const descriptionC = (
            `This is a database of anime I created using C++. The user can list, search for, delete, 
            and add anime. The only library other than STL I used is ncurses, which I used for the 
            GUI.`
        ); 
            
        return (
            <>
                <Project 
                    description={descriptionA}
                    linkA="https://github.com/JerryZhengPro/personal-website"
                    linkAName="GitHub Repository"
                    image={personalWebsite} 
                    title="Personal Website"
                    date="November 2020 - Present"
                    credits="Jerry Zheng"
                />
                <Project 
                    description={descriptionB}
                    linkA="https://github.com/JerryZhengPro/spin"
                    linkAName="GitHub Repository"
                    linkB="https://github.com/JerryZhengPro/spin-backend"
                    linkBName="Backend GitHub Repository"
                    image={spin} 
                    title="Spin"
                    date="July 2020 - Present"
                    credits="Jerry Zheng"
                />
                <Project
                    description={descriptionC}
                    title="Anime Database"
                    date="April 2022 - Present"
                    credits="Jerry Zheng"
                />
                <div style={{height: "200px"}}/>
            </>
        )
    }
}

export default Projects;  
