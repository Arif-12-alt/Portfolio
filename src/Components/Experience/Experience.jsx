import React,{useContext} from 'react'
import './Experience.css'
import {themeContext} from '../../Context';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="experience" id='Experience'>
    <div className="achievement">
      <div className="circle"  style={{color:darkMode? 'black':''}}>6+</div> 
      <span>Months</span> 
      <span>Experience</span> 
    </div>
    <div className="achievement">
       <div className="circle"  style={{color:darkMode? 'black':''}}>5+</div>
       <span>Completed</span> 
       <span>Project</span> 
    </div>
    <div className="achievement">
       <div className="circle"  style={{color:darkMode? 'black':''}}>0</div>
       <span>Company</span> 
       <span>Work</span> 
    </div>
   </div>
  )
}

export default Experience
