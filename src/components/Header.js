import React from "react";

import CustomLink from "./CustomLink";

function Header() {
  return (
    <header className="main-header">
      <nav className="">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/work">Work</CustomLink>
        {/* <button className="btn-them">ON\OFF</button> */}
        {/* <CustomLink to="/about">About</CustomLink> */}
      </nav>
    </header>
  );
}

export default Header;
