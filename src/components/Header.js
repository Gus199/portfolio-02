import React from "react";

import CustomLink from "./CustomLink";




function Header() {
	return (
		<header className="main-header">
		

			<nav className="">
				{/* <Link to="/">Home</Link>
				<Link to="/work">Work</Link> */}
				{/* <ul className="nav-list">
				<li className="nav-item">
          <a href="#">Logo</a>
        </li>	 */}
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/work">Work</CustomLink>
				<CustomLink to="/about">About</CustomLink>
				{/* </ul> */}
				{/* <Link to="/about">About</Link> */}
		
				
			</nav>
		</header>
	);
}

export default Header;
