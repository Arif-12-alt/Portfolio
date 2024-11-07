import React from 'react'
import './Navbar.css'
import Toggle from '../Components/Toggle/TOggle'
import {Link} from 'react-scroll'

function Navbar() {
  return (
   <div className="n-wrapper">
   <div className="n-left">
    <div className="n-name">Arif</div>
    <Toggle/>
   </div>
   <div className="n-right">
    <div className="n-list">
        <ul style={{listStyle:"none"}}>
          <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'> <li>Home</li></Link>
          <Link spy={true} to='Services' smooth={true} activeClass='activeClass'><li>Services</li></Link>
          <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'> <li>Expereince</li></Link>
          <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'> <li>Portfolio</li></Link> 
          <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'> <li>Testimonials</li></Link> 
        </ul>
    </div>
    <button className="button n-button">Contact</button>
   </div>

   </div>
  )
}

export default Navbar;
