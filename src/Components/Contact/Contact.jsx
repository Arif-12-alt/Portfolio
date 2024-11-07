import { useRef, useState, useContext } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import {themeContext} from '../../Context';

const Contact = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  
  const form = useRef();

  const [done,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4yr398r', 'template_zuycqep', form.current, {
        publicKey: '1Q3dC88sIOpSKcHe5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{color:darkMode? 'white':''}}>Get in touch</span>
          <span>Contact Me</span>
        </div>
        <div className="blur s-blur1" style={{background:"#abf1ff94"}}>
        </div>
      </div>
      <div className="c-right">
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='user_name' className='user' placeholder='Name'/>
        <input type='email' name='user_email' className='user' placeholder='Email'/>
        <textarea input type='message' className='user' placeholder='Message'/>
        <input type='submit' value="Send" className='button'/>
        <span>{done && 'Thanks for contact me!'}</span>
        <div className='blur c-blur1' style={{background:"var(--purple)"}}>
        </div>
      </form>  
    </div>
    </div>
    </>
  )
}

export default Contact
