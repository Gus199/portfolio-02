import React from "react";

import CustomLink from "./CustomLink";




function Header() {
	return (
		<header className="main-header">
			<nav>
				{/* <Link to="/">Home</Link>
				<Link to="/work">Work</Link> */}
				
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/work">Work</CustomLink>
				<CustomLink to="/about">About</CustomLink>
				
				{/* <Link to="/about">About</Link> */}
		
				
			</nav>
		</header>
	);
}

export default Header;
