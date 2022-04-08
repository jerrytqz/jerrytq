import React, {Component} from 'react'; 

import classes from './PostSecondary.module.css'; 
import PSHeader from '../../components/PSHeader/PSHeader'; 

import Waterloo from '../../assets/PostSecondary/Waterloo.jpeg'; 
import Waterloo1 from '../../assets/PostSecondary/Waterloo1.jpeg'; 
import Waterloo2 from '../../assets/PostSecondary/Waterloo2.jpeg'; 
import Waterloo3 from '../../assets/PostSecondary/Waterloo3.jpeg'; 

class PostSecondary extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <PSHeader title="University of Waterloo" image={Waterloo}/>
                <div className={classes.Body}>
                    <div className={classes.Left}>
                        <h3 style={{marginTop: 0}}>General Information</h3>
                        <ul>
                           <li>Computer Science</li>
                           <li style={{marginTop: "8px"}}>Bachelor of Computer Science (BCS)</li> 
                           <li style={{marginTop: "8px"}}>Co-op available</li> 
                           <li style={{marginTop: "8px"}}>4 years</li> 
                        </ul>
                        <h3 style={{marginTop: 0}}>Admission Requirements</h3>
                        <ul>
                           <li>High school diploma with at least 6 academic courses (not ADST courses except Economics 12 and Financial Management 12)</li>
                           <li style={{marginTop: "8px"}}>Low to mid 90s average percent grade</li> 
                           <li style={{marginTop: "8px"}}>Pre-Calculus 12</li> 
                           <li style={{marginTop: "8px"}}>English Studies 12 or English First Peoples 12</li> 
                           <li style={{marginTop: "8px"}}>AP Calculus or Calculus 12</li> 
                           <li style={{marginTop: "8px"}}>Meets Waterloo’s English language requirements</li> 
                        </ul>
                        <h3 style={{marginTop: 0}}>Important Dates</h3>
                        <ul>
                           <li>Application opens: September 2021</li>
                           <li style={{marginTop: "8px"}}>Application deadline: February 19, 2022</li> 
                           <li style={{marginTop: "8px"}}>Classes start: September 8, 2022</li> 
                        </ul>
                        <h3 style={{marginTop: 0}}>Program Expenses</h3>
                        <ul>
                           <li>Tuition and incidental fees: $15,900.00 CAD</li>
                           <li style={{marginTop: "8px"}}>Books and supplies: $2,290.00 CAD</li> 
                           <li style={{marginTop: "8px"}}>Single room on campus (Claudette Millar Hall): $7,188.00 CAD</li> 
                           <li style={{marginTop: "8px"}}>Average meal plan: $5,448.00 CAD</li> 
                           <li style={{marginTop: "8px"}}>Total cost per year: $30,826.00 CAD</li> 
                           <li style={{marginTop: "8px"}}>Total cost for the entire program: $123,304.00 CAD</li> 
                        </ul>
                    </div>
                    <div className={classes.Right}>
                        <img className={classes.Image} src={Waterloo1} alt="University"/>
                        <img className={classes.Image} src={Waterloo2} alt="University"/>
                        <img className={classes.Image} src={Waterloo3} alt="University"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostSecondary; 
