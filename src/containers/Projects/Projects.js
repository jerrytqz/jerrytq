import React, {Component} from 'react'; 

import Project from '../../components/Project/Project'; 

import spin from '../../assets/Projects/Spin.jpeg'; 
import animeDatabase from '../../assets/Projects/AnimeDatabase.jpeg'; 
import devFriend from '../../assets/Projects/DevFriend.jpeg'; 
import personalWebsite from '../../assets/Projects/PersonalWebsite.jpeg';
import burgerBuilder from '../../assets/Projects/BurgerBuilder.jpeg'; 

class Projects extends Component {
    render() {
        const descriptionA = (
            `Spin is a full stack web application built primarily with React and Django. It aims to 
            emulate a basic online economy by allowing players to spin a wheel to obtain collectibles, 
            which can later be sold on the market to other players using a fictional currency called 
            SP (Spin Points). The project consists of 3 major parts: a frontend built with React,
            a backend built with Django, and a Socket.IO server.` 
        );

        const descriptionB = (
            `This is a database of anime I created using C++. The user can list, search, delete, 
            and add anime. When the user is listing anime, they can choose to list by 
            alphabetical/reverse alphabetical order for all string fields, and ascending/descending  
            order for all numeric fields. When they are searching, they can choose to search exactly 
            or by using keywords for all string fields, and exactly or within a range for all 
            numeric fields. The only library other than the STL I used is ncurses, which was used 
            for the GUI (the built-in menu system).`
        ); 

        const descriptionC = (
            `Dev Friend is an open-source extension for Visual Studio Code. Its purpose is to 
            help developers by offering features such as time tracking, automatic break
            notifications, and a page for viewing comics during breaks. This was the main project 
            my group and I worked on during Major League Hacking's 2021 Summer Pre-Fellowship program.`
        ); 

        const descriptionD = (
            `I designed and implemented my own personal website from scratch using React. The 
            website showcases things such as my skills, achievements, and programming projects. I 
            plan on adding more features such as a contact form, a blog, and many UI improvements.` 
        );

        const descriptionE = (
            `Burger Builder is a project I built following a React course. It is a website where
            users may build a burger, order it, and see a list of all their pending orders. I used
            Firebase for authentication, hosting, and a database. I improved the project from
            the course by adding new features, such as a password confirmation when users sign up 
            and a picture of the burger for each order.`
        );
            
        return (
            <>
                <Project 
                    title="Spin"
                    credits="Jerry Zheng"
                    date="July 2020 - Present"
                    image={spin} 
                    description={descriptionA}
                    linkA="https://spin.jerrytq.com"
                    linkAName="Website"
                    linkB="https://github.com/JerryZhengPro/spin"
                    linkBName="GitHub Repository"
                    linkC="https://github.com/JerryZhengPro/spin-backend"
                    linkCName="Backend GitHub Repository"
                    linkD="https://github.com/JerryZhengPro/spin-socketio"
                    linkDName="Socket.IO Repository"
                />
                <Project
                    title="Anime Database"
                    credits="Jerry Zheng"
                    date="April 2022 - Present"
                    image={animeDatabase}
                    description={descriptionB}
                    linkA="https://github.com/JerryZhengPro/anime-database"
                    linkAName="GitHub Repository"
                />
                <Project
                    title="Dev Friend"
                    credits="MLH Fellowship Pod 3.1.4"
                    date="July 2021 - August 2021"
                    image={devFriend}
                    description={descriptionC}
                    linkA="https://marketplace.visualstudio.com/items?itemName=DevFriend.dev-friend&ssr=false#overview"
                    linkAName="Visual Studio Marketplace"
                    linkB="https://github.com/MLH-Fellowship/pod-3.1.4-DevFriendly"
                    linkBName="GitHub Repository"
                />
                <Project 
                    title="Personal Website"
                    credits="Jerry Zheng"
                    date="November 2020 - Present"
                    image={personalWebsite} 
                    description={descriptionD}
                    linkA="https://jerryzhengpro.github.io/personal-website"
                    linkAName="Website"
                    linkB="https://github.com/JerryZhengPro/personal-website"
                    linkBName="GitHub Repository"
                />
                <Project 
                    title="Burger Builder"
                    credits="Jerry Zheng"
                    date="July 2020 - September 2020"
                    image={burgerBuilder} 
                    description={descriptionE}
                    linkA="https://react-my-burger-53fda.web.app/"
                    linkAName="Website"
                    linkB="https://github.com/JerryZhengPro/burger-builder"
                    linkBName="GitHub Repository"
                />
                <div style={{height: "200px"}}/>
            </>
        )
    }
}

export default Projects;  
