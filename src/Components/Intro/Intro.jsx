import React, { useContext } from 'react'
import './Intro.css'
import Github from './../../img/github.png'
import LinkdIn from './../../img/linkedin.png'
import Instagram from './../../img/instagram.png'
import Vector1 from './../../img/Vector1.png'
import Vector2 from './../../img/Vector2.png'
import Arif from './../../img/arif.png'
import thumbup from './../../img/thumbup.png'
import Crown from './../../img/crown.png'
import glassesimoji from './../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FLoatingDiv'
import {themeContext} from '../../Context';
import {motion} from 'framer-motion'

const Intro = () => {

  const transition={duration:2,type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <>
    <div className='intro' id='Intro'>
      <div className="i-left">
        <div className="i-name">
      <span style={{color:darkMode? 'white':''}}>Hy! I Am</span>
      <span>Arif Mohammad</span>
      <span  style={{color:darkMode? 'white':''}}>Frontend Developer with good level of experience in web designing and development, producing the Quality work</span>
    </div>
 <button className="button i-button">Hire-me</button>
 <div className="i-icon">
  <a href=''>
  <img src={Github} alt=''/>
  </a>
  <a href>
  <img src={LinkdIn} alt=''/>
  </a>
  <a href=''>
  <img src={Instagram} alt=''/>
  </a>
 </div>
 </div>
 <div className="i-right">
   <img src={Vector1} alt=''/>
   <img src={Vector2} alt=''/>
   <img src={Arif} alt='' style={{borderRadius:"0% 100% 70% 40% / 100% 0% 25% 0%"}}/>
   <motion.img
   initial={{left:'-36%'}}
   whileInView={{left:'-24%'}}
   transition={transition}
   src={glassesimoji} alt=''/>
   <motion.div className='floating-div'
   initial={{top:'-4%',left:'74%'}}
   whileInView={{left:'68%'}}
   transition={transition}
   style={{top:"4%",left:"68%"}}>
    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
   </motion.div>
   <motion.div className='floating-div'
    initial={{top:'18rem',left:'9rem'}}
    whileInView={{left:'0rem'}}
    transition={transition}
   style={{top:"18rem",left:"0rem"}}>
    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
   </motion.div>
   <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
   <div className='blur' style={{background:'#CIF5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
 </div>
 </div>

 </>
  )
}

export default Intro;
