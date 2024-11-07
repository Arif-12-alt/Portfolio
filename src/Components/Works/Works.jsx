import React,{useContext} from 'react';
import './Works.css';
import Upwork from './../../img/Upwork.png'
import Fiverr from './../../img/fiverr.png'
import Amazon from './../../img/amazon.png'
import Shopify from './../../img/Shopify.png'
import Facebook from './../../img/Facebook.png'
import {motion} from 'framer-motion'
import {themeContext} from '../../Context';

const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
  return (
    <div className="works">
    <div className="awesome">
     <span style={{color:darkMode? 'white':''}}>Works for All these</span>
     <span>Brand & Clients</span>
     <span  style={{color:darkMode? 'white':''}}>Lorem ispum is simply dummy text of printing of printing Lorem<br/> ispum is simply dummy text of printing of printing <br/>Lorem ispum is simply dummy text of printing of printing<br/> Lorem ispum is simply dummy text. </span>
     <button className="button s-button">Hire Me</button>
     <div className='blur t-blur1' style={{background:'var(--purple)'}}></div>
     <div className="blur t-blur2" style={{background:'skyblue'}}></div>
    </div>
    <div className="w-right">
         <motion.div 
         initial={{rotate:45}}
         whileInView={{rotate:0}}
         viewport={{margin:'-40px'}}
         transition={{duration:3.5,type:'spring'}}
         
         className="w-mainCircle">
             <div className="w-secCircle">
                 <img src={Upwork} alt=''/>
             </div>
             <div className="w-secCircle">
                 <img src={Fiverr} alt=''/>
             </div>
             <div className="w-secCircle">
                 <img src={Amazon} alt=''/>
             </div>
             <div className="w-secCircle">
                 <img src={Shopify} alt=''/>
             </div>
             <div className="w-secCircle">
                 <img src={Facebook} alt=''/>
             </div>
         </motion.div>
         <div className="w-backCircle blueCircle"></div>
         <div className="w-backCircle yellowCircle"></div>
         </div>
        </div>
  )
}

export default Works
