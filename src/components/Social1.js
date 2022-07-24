import React from 'react'
// import CustomLink from './CustomLink'
import {BsGithub} from 'react-icons/bs'
import {AiFillFileText} from 'react-icons/ai'
import {AiOutlineLinkedin } from 'react-icons/ai'

function Social1() {
  return (
    <navbar className='navbar'>
    <ul className="social-list">
      <li className="social-item">
     
      </li>
      <li className="social-item">
        <a href="https://github.com/Gus199"><BsGithub style={{ fontSize:'35px'}}/></a>
      </li>
      <li className="social-item">
        <a href="https://www.linkedin.com/in/amar-ait-gherbi-203a9821a"><AiOutlineLinkedin  style={{ fontSize:'35px'}}/></a>
      </li>
      <li className="social-item">
        <a href="./images/amar.pdf" ><AiFillFileText  style={{ fontSize:'35px'}}/></a>
      </li>
    </ul>
  </navbar>
  )
}

export default Social1