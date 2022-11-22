import React, {useState} from 'react'
import './OnOf.css'

const OnOf = ({switchTheme}) => {
  
 

  return (
    <>
    <label  onClick={switchTheme} >
    <input type="checkbox" name=""  />
    <span className="check" ></span>
    <span className="btnOn" ></span>
  </label>
  </>
  )
}

export default OnOf