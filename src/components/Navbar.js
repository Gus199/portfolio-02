import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomLink from "./CustomLink";
import "./Navbar.css";
import OnOf from "./OnOf";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
		
	};

	return (
		<header className='main-header'>
			<h3 className="OnOf"><OnOf /></h3>
			<nav ref={navRef}>
		
				<CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/work'>Work</CustomLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
