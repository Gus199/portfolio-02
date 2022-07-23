// import React, { useState } from "react";
// import Contact from "./Contact";
// import "../App.css";

// import Modal from "react-modal";


// Modal.setAppElement("#root");

// export default function ContactUs() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }
//   const customStyles = {
//     position: 'fixed',
    
//     borderRadius: '10px 100px / 120px',
//     backgroundColor: '#f5ba09',

//   };

//   return (
//     <div  className="us">
//       <button onClick={toggleModal}  style={customStyles}>Contact Us</button>
     

//       <Modal
//      className="project-list"
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My dialog"
//         style={customStyles}
//       >
//           <button onClick={toggleModal} style={{color:'black'}} >Close modal</button>
      
//        <Contact />

        
//       </Modal>
//     </div>
//   );
// }