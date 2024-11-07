import React,{useContext, useEffect} from 'react';
import './Services.css';
import HeartEmoji from "./../../img/heartemoji.png";
import Glasses from "./../../img/glasses.png";
import Humble from "./../../img/humble.png";
import {themeContext} from '../../Context';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(()=>{
    AOS.init({duration:2000});

  },[])

  return (
  <div className="services" id='Services'>
    <div className="awesome">
     <span  style={{color:darkMode? 'white':''}}>My Awesome</span>
     <span>Services</span>
     <span  style={{color:darkMode? 'white':''}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsumquia ex? Accusamus expedita ex<br/>  dignissimos.</span>
     <a href=''>
     <button className="button s-button">Download CV</button></a>
    <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
    </div>

    <div className="cards">
     <div data-aos="fade-down-left"  
     style={{left:'14rem'}} >
     <div className="card">
       <img src={HeartEmoji} alt=''/>
       <span  style={{color:darkMode? 'orange':''}}>Design</span>
       <span>HTML,CSS,Bootstrap,Java Script,React JS</span>
       <button className="c-button">LEARN MORE</button>
    </div>
    </div>
    <div data-aos="fade-up-right"
    style={{top:'12rem',left:'-4rem'}}>
    <div className="card">
       <img src={Glasses} alt=''/>
       <span  style={{color:darkMode? 'orange':''}}>Developer</span>
       <span>HTML,CSS,Bootstrap,Java Script,React JS</span>
       <button className="c-button">LEARN MORE</button>
    </div> 
    </div>
    <div data-aos="fade-up-left"
    style={{top:'19rem',left:'12rem'}}>
    <div className="card">
       <img src={Humble} alt=''/>
       <span  style={{color:darkMode? 'orange':''}}>Knoweldge</span>
       <span>HTML,CSS,Bootstrap,Java Script,React JS</span>
       <button className="c-button">LEARN MORE</button>
    </div> 
    </div>
    <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
    </div>
  </div>
  )
}

export default Services
