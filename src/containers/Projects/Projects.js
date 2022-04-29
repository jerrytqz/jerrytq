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
            `Spin is a React game website where players can spin a wheel to unbox items, view an 
            inventory of their items, and view their profile and stats. I also implemented 
            a Django backend for authentication and access to a database, as well as WebSocket to
            enable real-time UI updating.` 
        );

        const descriptionB = (
            `This is a database of anime I created using C++. The user can list, search, delete, 
            and add anime. When the user is listing anime, they can choose to list by 
            alphabetical/reverse alphabetical order for all string fields, and ascending/descending  
            order for all numeric fields. When they are searching, they can choose to search exactly 
            or by using keywords for all string fields, and exactly or within a range for all 
            numeric fields. The only library other than the STL I used is ncurses, which was used 
            for the GUI (the built-in menu system)`
        ); 

        const descriptionC = (
            `Dev Friend is an open-source extension for Visual Studio Code. Its purpose is to 
            help developers by offering features such as time tracking, automatic break
            notifications, and a meme page. This was the main project my group and I worked on 
            during Major League Hacking's 2021 Summer Pre-Fellowship program.`
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
                    linkA="https://github.com/JerryZhengPro/spin"
                    linkAName="GitHub Repository"
                    linkB="https://github.com/JerryZhengPro/spin-backend"
                    linkBName="Backend GitHub Repository"
                    linkC="https://github.com/JerryZhengPro/spin-websocket"
                    linkCName="WebSocket Repository"
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
                    credits="Jerry Zheng, Akshat Mangal, Gerald Akorli, and Tianhui Xu"
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
