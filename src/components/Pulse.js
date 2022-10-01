import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
// import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
// import Footer from "./Footer";

import Modal from "react-modal";

const customStyles = {
  
  content: {
    //   display: 'flex',
    justifyContent: "center",
    padding: "0em 4em",
    width: "75%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "25px",
    position: "relative",
    height: "550px",
    
  },
 
};

function Pulse() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //   const [noteText, setNoteText] = useState('')

  // Open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <div>
      <div className="streamer">
        <Fade
          triggerOnce={true}
          cascade={true}
          damping={0.1}
          direction="up"
          duration={500}
          fraction={0}
          delay={500}
        >
          <div onClick={openModal} className="pulse"></div>
        </Fade>
      </div>
     
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
        ariaHideApp={false}
      >
        {/* <h2>Add Note</h2> */}

        <button className="btn-close" onClick={closeModal}>
          X
        </button>
	
        <Contact />
      </Modal>
   
     
    </div>
  );
}

export default Pulse;
