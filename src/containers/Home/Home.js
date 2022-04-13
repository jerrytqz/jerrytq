import React, {Component} from 'react'; 

import classes from './Home.module.css'; 
import Extracurriculars from '../../components/Extracurriculars/Extracurriculars';
import Overview from '../../components/Overview/Overview';
import ProfileMain from '../../components/ProfileMain/ProfileMain'; 
import Skills from '../../components/Skills/Skills'; 
import Achievements from '../../components/Achievements/Achievements'; 
import Certifications from '../../components/Achievements/Certifications';

class Home extends Component {
    render() {
        return (
            <>
                <ProfileMain/>
                <Overview/>
                <Skills/> 
                <Extracurriculars/>
                <div className={classes.AchievementsCertifications}>
                    <Achievements/>
                    <Certifications/>
                </div>
            </>
        )
    }
}

export default Home; 
