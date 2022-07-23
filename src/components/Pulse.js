import React, {useState, useEffect} from 'react'
import emailjs from "@emailjs/browser";
import FadeUp from "../animations/FadeUp";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";


import Modal from 'react-modal'
// import {FaPlus} from 'react-icons/fa'
// import Socials from './Socials'



const customStyles = {
  content: {
    padding: '1em 3em',
    width: '40%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '25px',
    position: 'relative',
    
    
  },
  
}


function Pulse() {
    const [success] = useState()
	const navigate = useNavigate();
	const [formDisabled, setFormDisabled] = useState(true);
	

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	// disable form submit if inputs are empty, otherwise enable form submit
	useEffect(() => {
		if (firstName === "" || lastName === "" || email === "" || message === "") {
			setFormDisabled(true);
		} else {
			setFormDisabled(false);
		}
	}, [firstName, lastName, email, message]);

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastNameChange = (e) => {
		setLastName(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	useEffect(() => {
		if(success) {
		  toast.success('success')
		
		}
		  }, [success])

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitted");
	
		const templateParams = {
			from_name: `${firstName} ${lastName}`,
			reply_to: email,
			message: message,
			to_name: `${firstName}`
		};
		
		 
		emailjs
			.send(
				"service_ie85gfn",
				"template_tf6woji",
				templateParams,
				"Bq5FJZ-ktAlsWmcX9"
			)
			.then(
				(response) => {
					if (response.status === 200) {
						console.log("success");
						// setToastMessage(
						// 	"Thank you for your message!  I will respond as soon as I can."
						// );
						// setToastType("success");
						// setShow(true);

						// setTimeout(() => {
						// 	setShow(false);
						// }, 5000);
					} else {
						console.log("something went wrong");
						// setToastMessage(
						// 	"Something went wrong...please email me directly at amaraitgherbi@gmail.com."
						// );
						// setToastType("failure");
						// setShow(true);
						// setTimeout(() => {
						// 	setShow(false);
						// }, 5000);
					}
				},
				(err) => {
					console.log("something went wrong");
					// setToastMessage(
					// 	"Something went wrong...please email me directly at amaraitgherbi@gmail.com."
					// );
					// setToastType("failure");
					// setShow(true);

					// setTimeout(() => {
					// 	setShow(false);
					// }, 5000);
				}
			);
			

		setFirstName("");
		setLastName("");
		setEmail("");
		setMessage("");
		navigate('/work')
		
	};
//   return (
//     <div class="fixed-btn">
//     <p>fixed button</p>
//   </div>
  
//   )
const [modalIsOpen, setModalIsOpen] = useState(false)
//   const [noteText, setNoteText] = useState('')

  // Open/close modal
const openModal = () => setModalIsOpen(true)
const closeModal = () => setModalIsOpen(false)
  return (
   
<div>
      {/* <div class="streamer"> */}
        {/* <div class="pulse"></div> */}
        
        <div className="streamer">
        <Fade
							triggerOnce={true}
							cascade={true}
							damping={0.1}
							direction="up"
							duration={1000}
							fraction={0}
							delay={500}
						>
        <div onClick={openModal} className='pulse'>
        </div>
        </Fade>
        </div>
      
      {/* </div> */}
         {/* </MdOutlineContactPhone> */}
   
  <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Add Note'
      >
        <h2>Add Note</h2>
        <button className='btn-close' onClick={closeModal}>
          X
        </button>
        <FadeUp triggerOnce duration={1000} fraction={0}>
        <form className="contact-form" onSubmit={handleSubmit}>
				<Fade
										delay={200}
										cascade={true}
										damping={0.25}
										triggerOnce
										direction="up"
										duration={500}
										fraction={0}
									>
					<label>First Name</label>
					<input
						className="underline-input"
						placeholder="John"
						type="text"
						onChange={handleFirstNameChange}
						value={firstName}
					/>
					<label>Last Name</label>
					<input
						className="underline-input"
						placeholder="Smith"
						type="text"
						onChange={handleLastNameChange}
						value={lastName}
					/>
				
					<label>Email</label>
					<input
						className="underline-input"
						placeholder="tech-person@tech.com"
						type="email"
						onChange={handleEmailChange}
						value={email}
					/>
					<label>Message</label>
					<textarea
						className="underline-input"
						placeholder="let's make something cool together!"
						onChange={handleMessageChange}
						value={message}
					></textarea>
						
					<div className="flex-center-container">
						<button
							disabled={formDisabled}
							className="btn secondary input-submit"
							type="submit"
						>
							Submit
						</button>
					</div>
					</Fade>
				</form>
                <Bounce  button delay={1000}>
				<div className="contact-note-container"><p>(or just email me @ <span className="accent-orange-text">amaraitgherbi@gmail.com</span>)</p></div>
				</Bounce>
                </FadeUp>
      </Modal>
  </div>
  
  );
}

export default Pulse;
