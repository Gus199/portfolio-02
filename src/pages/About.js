import { useEffect, useState } from 'react'
import Socials from "../components/Socials";
import ContactUs from "../components/ContactUs";
import '../App.css'

import Modal from 'react-modal'
import {FaPlus} from 'react-icons/fa'



const customStyles = {
  content: {
    padding: '1em 3em',
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}
function About() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')

  // Open/close modal
const openModal = () => setModalIsOpen(true)
const closeModal = () => setModalIsOpen(false)
  return (
<div>
	<h1>hello</h1>
  <Socials />
  {/* <ContactUs /> */}
 
        <button onClick={openModal} className='btn'>
          <FaPlus style={{backgroundColor:'black'}} /> Add Note
        </button>
   
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
        <form >
          <div className='form-group'>
            <textarea
              name='noteText'
              id='noteText'
              className='form-control'
              placeholder='Note text'
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
  </div>
  
  );
}

export default About;
