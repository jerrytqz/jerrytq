import React, {Component} from 'react'; 

import classes from './Home.module.css'; 
import Hero from '../../components/Hero/Hero'; 
import Overview from '../../components/Overview/Overview';
import Skills from '../../components/Skills/Skills'; 
import Extracurriculars from '../../components/Extracurriculars/Extracurriculars';
import Achievements from '../../components/Achievements/Achievements'; 
import Certifications from '../../components/Achievements/Certifications';

class Home extends Component {
    render() {
        return (
            <>
                <Hero content={this.props.content.hero}/>
                <Overview content={this.props.content.overview}/>
                <Skills content={this.props.content.skills}/> 
                <Extracurriculars content={this.props.content.extracurriculars}/>
                <div className={classes.AchievementsCertifications}>
                    <Achievements content={this.props.content.achievements}/>
                    <Certifications content={this.props.content.certifications}/>
                </div>
            </>
        )
    }
}

export default Home; 
