import React from "react";
import {BsCodeSlash} from 'react-icons/bs'
import CustomLink from "./CustomLink";

function Navbar() {
  return (
    <navbar className='navbar'>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#"><BsCodeSlash /></a>
        </li>
        <li className="nav-item">
          <a href="#"><CustomLink to="/">Home</CustomLink></a>
        </li>
        <li className="nav-item">
          <a href="#"><CustomLink to="/work">Work</CustomLink></a>
        </li>
        <li className="nav-item">
          <a href="#">	<CustomLink to="/about">About</CustomLink></a>
        </li>
      </ul>
    </navbar>
  );
}

export default Navbar;
