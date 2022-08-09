import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import Modal from "./components/Modal";
import { Routes, Route } from "react-router-dom";
import { useModalContext } from "./contexts/ModalContext";
import Social from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulsFoter from "./components/PulsFoter";



function App() {
	const { isModal, resetModal, modalContent } = useModalContext();

	return (<>
		
		<div className="App">
		{/* <Navbar /> */}
			<Modal isModal={isModal} resetModal={resetModal} content={modalContent} ariaHideApp={false} />
			<Header />
		
			
			<Routes>
				<Route path="/" element={<Home />} />
				
				<Route path="/about" element={<Social />} />
				<Route path="/work" element={<Work />} />
				<Route path="*" element={<NotFound />} />
			
			</Routes>
			
		
			<Footer />
			<PulsFoter />
			<ToastContainer />
		</div>
		</>
	);
}

export default App;
