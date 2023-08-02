import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import BestBooks from '../../components/BestBooks/BestBooks'
import "./Home.css"



export default function Home({openModal, closeModal, modalContent}) {
    // const [modal, setModal] = useState(false)
    // const [modalContent, setModalContent] = useState({})

    // function handleModal(book){
    //     setModal(!modal)
    //     setModalContent(book)
    // }

    // function closeModal(){
    //     setModal(!modal)
    //     setModalContent({})
    // }
    

  return (
    <>
        <Helmet>
            <title>Can of Books Home</title>
            <meta name='description' content='This is the home page for Can of Books'/>
            <link rel='canonical' href='/'/>
        </Helmet>
        <main>
            <h2>Home Page</h2>
            <BestBooks openModal={openModal} closeModal={closeModal} modalContent={modalContent}/>
        </main>
    </>
  )
}
