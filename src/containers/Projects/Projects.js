import React, {Component} from 'react'; 

import Project from '../../components/Project/Project'; 

import personalWebsite from '../../assets/Projects/PersonalWebsite.jpeg';
import spin from '../../assets/Projects/Spin.jpeg'; 
import poetryProject from '../../assets/Projects/PoetryProject.jpeg';
import lotteryQuestions from '../../assets/Projects/LotteryQuestions.jpeg'; 
import gratitudeJournal from '../../assets/Projects/GratitudeJournal.jpeg'; 
import astronomyProject from '../../assets/Projects/AstronomyProject.jpeg'; 

class Projects extends Component {
    render() {
        const descriptionA = 
            `I designed and implemented my own personal website from scratch using React, a JavaScript framework for building user interfaces. 
            For presentations, I have always used a slideshow as my means of presenting. However, for the Capstone Project, I chose to do something 
            much more creative by making a website. In doing this, I have also managed to gain a better understanding and appreciation of 
            myself, especially by recognizing all my achievements in my high school career.`; 

        const descriptionB = 
            `Spin is a React game website where players can spin a wheel to unbox items, view an inventory of their items, and check up on their 
            profile and stats. I also implemented a Django backend for authentication and access to a database. This project came solely from my 
            imagination and creativity outside of school. While making it, I had to reflect on and revise my code numerous times for best practices 
            and optimization purposes.`; 

        const descriptionC = 
            `This poetry project is evidence of my growth in Social Awareness and Responsibility as I chose to focus on social justice issues such 
            as pollution and misjudgement. By writing poems to spread awareness of these issues, I have demonstrated that I am socially aware of the 
            injustices in the world today and that I am taking responsibility by spreading my awareness to others.`; 

        const descriptionD = 
            `Answering these 14 comprehension and analysis questions on “The Lottery” by Shirley Jackson with Lawrence, Timothy, and Vhea in 
            the span of an hour while communicating online has been one of the most teamwork dependent tasks I have ever taken on. To finish in 
            time and with quality, we had to ensure that everyone knew what they were doing, that everyone’s perspectives and ideas were heard, 
            and that we were effectively communicating and understanding each other.`; 
        
        const descriptionE = 
            `Making this gratitude photo journal has forced me to think critically and reflect on the things in my life that I should be grateful 
            for, encouraging me to challenge what I have taken for granted. As a result of finding so many things that I should be happy about, my 
            mood and overall happiness has been greatly boosted. I have ultimately become more personally aware and responsible for my mental health 
            by creating this gratitude journal.`; 

        const descriptionF = 
            `This astronomy project I made in Science 10 is the presentation that I am the most proud of. Compared to my previous slideshows and presentations, 
            I feel that I conveyed my ideas in a much more clear, concise, and effective manner. Working on this project also required lots of collaboration 
            as I had a partner whose English was not the best, but everything went smoothly nevertheless.`; 
        
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
                    thinking="Creative Thinking"
                    personalSocial="Positive Personal and Cultural Identity"
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
                    thinking="Creative Thinking | Critical and Reflective Thinking"
                />
                <div style={{height: "200px"}}/>
            </>
        )
    }
}

export default Projects;  
