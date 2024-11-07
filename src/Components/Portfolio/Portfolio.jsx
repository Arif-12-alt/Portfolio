    import React,{useContext}from 'react'
import './Portfolio.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import Project from './../../img/Project.jpg.png'
import Project2 from './../../img/Project2.jpg.png'
import Project6 from './../../img/Project6.jpg.png'
import Project5 from './../../img/Project5.jpg.png'
import Project3 from './../../img/Project3.jpg.png'
import Project4 from './../../img/Project4.jpg.png'
import 'swiper/css'
import {themeContext} from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    
  return (
    <div className="portfolio" id='Portfolio'>
        <span style={{color:darkMode? 'white':''}}>Recent Project</span>
        <span>Portfolio</span>
        <Swiper spaceBetween={30} 
        slidesPerView={3} 
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Project} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project5} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project2} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project6} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project3} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Project4} alt=''/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
