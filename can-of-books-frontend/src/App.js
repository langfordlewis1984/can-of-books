import './Reset.css'
import './App.css';
import BestBooks from './components/BestBooks/BestBooks';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from 'react';


function App() {
  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState({})

  function handleModal(book){
      setModal(!modal)
      setModalContent(book)
  }

  function closeModal(){
      setModal(!modal)
      setModalContent({})
  }
  return (
    <>
    <BrowserRouter>
      <div className=''>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home openModal={handleModal} closeModal={closeModal} modalContent={modalContent}/>}/>
        <Route path='/about' element={ <About />}/>
      </Routes>
      <Footer/>
      
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
