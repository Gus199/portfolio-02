import React, { useState } from 'react';
import FadeUp from '../animations/FadeUp';
// import Pulse from "../components/Pulse";
import { Fade } from 'react-awesome-reveal';
import projectData from '../content/content.js';
import Project from '../components/Project';
// import Contact from "../components/Contact";
import Socials from '../components/Socials';
import CustomLink from '../components/CustomLink';

// import ContactUs from "../components/ContactUs";
// import ContactUs from "../components/ContactUs";
// import Button from "../components/Button";
// import Social1 from "../components/Social1";

const Home = () => {
  const [featuredProjects] = useState([
    projectData[0],
    projectData[1],
    projectData[2],
  ]);

  return (
    <div className='main-container'>
      {/* <ContactUs className="us" /> */}

      <div className='inner-container'>
        {/* <section className="section-1"> */}
        <div className='section-container'>
          <FadeUp
            duration={1000}
            triggerOnce={true}
            fraction={0}
            cascade={true}
            damping={0.1}
          >
            <h1 className='section-title main-section-title'>
              I'm Amar Ait-Gherbi
              <div className='line'></div>
            </h1>

            <h2 className='sub-title'>Full Stack Developer</h2>

            {/* <Social1 /> */}
            <Socials />

            <div className='bio-with-image'>
              <img
                className='bio-img'
                src='./images/amarp.png'
                alt='Amar @GoRoostr'
              />
              <p className='bio'>
                I’m a freelance full stack developer with a wide range of skills
                and a passion for learning. Although I started programming as
                mostly self-taught, I didn’t let it hold me back from reaching
                my potential as a creator on the web. When learning on my own
                became overwhelming in the ever-changing world of web
                development, I enrolled and graduated from a full stack bootcamp
                offered by University of Pennsylvania.
                <br></br>
                <br></br>
                My formal educational background is in Mechanical Engineering,
                as I have always loved to build things. Currently, I also work
                as a repair Technician at GoRoostr, where I troubleshoot,
                diagnose, repair all Apple devices (Macbooks, iPhones,
                Ipads,Apple watches) which also includes data recovery. I have
                practical in-depth knowledge of common hardware issues, test
                equipment of internal parts, (logic board, battery, screen,
                charging port, LCD, button/camera), and Macbooks
                assembly/disassembly. I work well on my own, and with others to
                solve complex problems and find creative solutions.
                <br></br>
                {/* <br></br>
                As a father and husband, I want to make my family proud. It's
                why I decided to take the road less traveled and build a new
                career in the first place. It's why I continue to grind every
                day to improve as a developer. I want to prove to myself and set
                an example for my son and my daughter that at any age, it's not
                too late to re-invent yourself and find success in your
                passions.
                <br></br> */}
                <br></br>
                I'm currently available for{' '}
                <span className='accent-orange-text'>
                  freelance opportunities
                </span>
                , <span className='accent-orange-text'>contract roles</span>, or{' '}
                <span className='accent-orange-text'>full time positions</span>.
                Please reach out @{' '}
                <span className='accent-orange-text'>
                  amaraitgherbi@gmail.com
                </span>
                , I would love to hear from you!
              </p>
            </div>
          </FadeUp>
        </div>
        {/* </section> */}
        {/* <section className="section-2"> */}

        <div className='section-container'>
          <FadeUp
            duration={1000}
            triggerOnce={true}
            fraction={0}
            cascade={true}
            damping={0.1}
          >
            <h1 className='section-title'>
              I'm constantly adding to my toolbox of skills
              <div className='line'></div>
            </h1>
            <div className='skills-container'>
              <div>
                <h3 className='what-im-good-at'>What I'm good at</h3>
                <ul className='skill-list'>
                  <Fade
                    delay={1000}
                    cascade={true}
                    damping={0.25}
                    triggerOnce
                    direction='up'
                    duration={500}
                    fraction={0}
                  >
                    <li className='pill'>HTML5</li>
                    <li className='pill'>CSS3</li>
                    <li className='pill'>Javascript ES6+</li>
                    <li className='pill'> jQuery</li>
                    <li className='pill'>React.JS</li>
                    <li className='pill'>Node.JS</li>
                    <li className='pill'>Express.JS</li>
                    <li className='pill'>MongoDB</li>
                    <li className='pill'>MySQL</li>
                    <li className='pill'> RESTful APIs</li>
                    <li className='pill'>Next.JS</li>
                    <li className='pill'>JSON</li>
                    <li className='pill'>Git</li>
                    <li className='pill'>Redux.JS</li>
                    <li className='pill'>Redux-Toolkit</li>
                    <li className='pill'>GraphQL</li>
            
                  </Fade>
                </ul>
              </div>
              <p className='skills-description'>
                The modern web is always changing, so I am always learning. I
                enjoy fiddling with different tools across the web and finding
                the right fits for my development style,but I am also versatile.
                If a job is best served with a certain set of technologies, then
                I will make sure to take the time and dive deep when necessary.
                <br></br>
                <br></br>
                I'm currently teaching myself{' '}
                <span className='important-text'>Typescript</span>,and{' '}
                <span className='important-text'>React Native</span>.
                {/* <span className="important-text">Strapi</span>. */}
              </p>
            </div>
          </FadeUp>
        </div>
        {/* </section> */}
        {/* <section className="section-3"> */}
        <div className='section-container'>
          <FadeUp duration={1000} triggerOnce={true} fraction={0}>
            <h1 className='section-title'>
              Take a look at my featured work
              <div className='line'></div>
            </h1>
          </FadeUp>
          <ul className='project-list'>
            <Fade
              triggerOnce={true}
              cascade={true}
              damping={0.1}
              direction='up'
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
          <div className='flex-center-container'>
            <Fade direction='up' delay={0} triggerOnce fraction={0}>
              {/* <AttentionSeeker effect="tada" triggerOnce delay={0} fraction={0}> */}
              {/* <Link to={"/work"} className="btn secondary">
								View all
							</Link> */}
              <CustomLink to='/work' className='btn secondary'>
                View all
              </CustomLink>

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
