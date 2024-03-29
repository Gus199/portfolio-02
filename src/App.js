import './App.css';

import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import NotFound from './pages/NotFound';
import Modal from './components/Modal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useModalContext } from './contexts/ModalContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PulsFoter from './components/PulsFoter';
import Navbar from './components/Navbar';
// import Header from './components/Header';
// import DivTest from './components/DivTest';

function App() {
  const { isModal, resetModal, modalContent } = useModalContext();

  return (
    <div className='App'>
      <Modal
        isModal={isModal}
        resetModal={resetModal}
        content={modalContent}
        ariaHideApp={false}
      />
      <Navbar />
      {/* <DivTest />
      <Header /> */}

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/work' element={<Work />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
      <PulsFoter />
      <ToastContainer />
    </div>
  );
}

export default App;
