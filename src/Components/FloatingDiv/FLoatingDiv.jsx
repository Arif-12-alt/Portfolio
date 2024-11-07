import React,{useContext} from 'react'
import "./FLoatingDiv.css"
import {themeContext} from '../../Context';

const FLoatingDiv = ({image,txt1,txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="floatingdiv">
      <img src={image} alt=''/>
      <span style={{color:darkMode? 'black':''}}>
        {txt1}
        <br/>
       {txt2}
        </span>  
    </div>
  )
}

export default FLoatingDiv;
