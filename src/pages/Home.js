import React, { useState } from "react";
import FadeUp from "../animations/FadeUp";

import { Fade } from "react-awesome-reveal";
import projectData from "../content/content.js";
import Project from "../components/Project";
// import Contact from "../components/Contact";
import Socials from "../components/Socials";
import CustomLink from "../components/CustomLink";
// import ContactUs from "../components/ContactUs";
// import ContactUs from "../components/ContactUs";
import Button from "../components/Button";



const Home = () => {
	const [featuredProjects] = useState([
		projectData[0],
		projectData[1],
		projectData[2],
	]);

	return (
		<div className="main-container">
	
						{/* <ContactUs className="us" /> */}
					
			<div className="inner-container">
				{/* <section className="section-1"> */}
				<div className="section-container">
					<FadeUp
						duration={1000}
						triggerOnce={true}
						fraction={0}
						cascade={true}
						damping={0.1}
					>
						<h1 className="section-title main-section-title">
							I'm Amar Ait-Gherbi
						</h1>
						
						<h2 className="sub-title">Full Stack developer</h2>
						<Socials />
						{/* <ContactUs /> */}
						
						{/* <MdContactMail className="test"/> */}
					
						

						<div className="bio-with-image">
							<img className="bio-img" src="./images/amar.png" alt="Amar @GoRoostr"/>
							<p className="bio">
							
								I'm currently a freelance full stack developer with a wide range
								of skills and a passion for learning. I am mostly self-taught
								but I don't let it hold me back from reaching my potential as a
								creator on the web. When learning on my own became overwhelming,
								as it can in the ever-changing world of web development, I
								enrolled and graduated from a full stack bootcamp offered by
								University of Pennsylvania.
								<br></br>
								<br></br>
								
								My background is in Mechanical Engineer, I have always loved building things,And I'm currently a repair Technician at GoRoostr,where i troubleshoot,diagnose, repair all Apple devices (Macbooks, iPhones, Ipads,Apple watches) and data recovery. I have in-depth knowledge of common issues, test equipment of internal parts (logic board, battery,screen, charging port,LCD, button/camera), and Macbooks assembly/disassembly.
			
								 work well on my
								own or with others, and enjoy solving problems.
								<br></br>
								<br></br>
								
								As a father and husband, I want to make my family proud. It's
								why I decided to take the road less traveled and build a new
								career in the first place. It's why I continue to grind every
								day to improve as a developer. I want to prove to myself and set
								an example for my son  and my daughter that at any age, it's not too late to re-invent
								yourself and find success in your passions.
								<br></br>
								<br></br>
								I'm currently available for{" "}
								<span className="accent-orange-text">
									freelance opportunities
								</span>
								, <span className="accent-orange-text">contract roles</span>, or{" "}
								<span className="accent-orange-text">full time positions</span>.
								Please reach out @ <span className="accent-orange-text">amaraitgherbi@gmail.com</span>, I would love to hear from you! 
							</p>
							
						</div>
					</FadeUp>
				</div>
				{/* </section> */}
				{/* <section className="section-2"> */}
				<Button />
				<div className="section-container">
					<FadeUp
						duration={1000}
						triggerOnce={true}
						fraction={0}
						cascade={true}
						damping={0.1}
					>
						<h1 className="section-title">
							I'm constantly adding to my toolbox of skills
						</h1>
						<div className="skills-container">
							
							<div>
								<h3 className="what-im-good-at">What I'm good at</h3>
								<ul className="skill-list">
									<Fade
										delay={1000}
										cascade={true}
										damping={0.25}
										triggerOnce
										direction="up"
										duration={500}
										fraction={0}
									>
										<li className="pill">HTML</li>
										<li className="pill">CSS</li>
										<li className="pill">Javascript</li>
										<li className="pill">React</li>
										<li className="pill">React Transition Group</li>
										<li className="pill">React Router</li>
										<li className="pill">react-redux</li>
										<li className="pill">Nextjs</li>
										<li className="pill">strapi</li>
										<li className="pill">NodeJS</li>
										<li className="pill">MongoDB</li>
										<li className="pill">Heroku</li>
										<li className="pill">Express</li>
										<li className="pill">@reduxjs/toolkit</li>
									</Fade>
								</ul>
							</div>
							<p className="skills-description">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of L
								{/* The modern web is always changing, so I am always learning. I
								enjoy fiddling with different tools across the web and finding
								the right fits for my development style, but I am also
								versatile. If a job is best served with a certain set of
								technologies, then I will make sure to take the time and dive
								deep when necessary. */}
								<br></br>
								<br></br>
								I'm currently teaching myself{" "}
								<span className="important-text">Nextjs</span>,{" "}
								<span className="important-text">Figma</span>, and{" "}
								<span className="important-text">Strapi 
</span>.
							</p>
						</div>
					</FadeUp>
				</div>
				{/* </section> */}
				{/* <section className="section-3"> */}
				<div className="section-container">
					<FadeUp duration={1000} triggerOnce={true} fraction={0}>
						<h1 className="section-title">Take a look at my featured work</h1>
					</FadeUp>
					<ul className="project-list">
						<Fade
							triggerOnce={true}
							cascade={true}
							damping={0.1}
							direction="up"
							duration={500}
							fraction={0}
							delay={500}
						>
							{featuredProjects.map((project, idx) => (
								<Project
									key={idx}
									imgSrc={project.imgSrc}
									alt={project.alt}
									title={project.title}
									description={project.description}
									stack={project.stack}
									liveLink={project.liveLink}
									codeLink={project.codeLink}
									isFeatured={project.isFeatured}
									featuredImgs={project.featuredImgs}
									featuredText1={project.featuredText1}
									featuredText2={project.featuredText2}
								/>
							))}
						</Fade>
					</ul>
					<div className="flex-center-container">
						<Fade direction="up" delay={0} triggerOnce fraction={0}>
							{/* <AttentionSeeker effect="tada" triggerOnce delay={0} fraction={0}> */}
							{/* <Link to={"/work"} className="btn secondary">
								View all
							</Link> */}
							<CustomLink to="/work" className="btn secondary">View all</CustomLink>

							{/* </AttentionSeeker> */}
						</Fade>
					</div>
				</div>
				{/* <Contact /> */}
				{/* </section> */}
				{/* <section className="section-8"> */}

				{/* </section> */}
			</div>
		</div>
	);
};

export default Home;
