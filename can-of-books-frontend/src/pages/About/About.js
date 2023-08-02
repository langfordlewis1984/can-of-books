import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./About.css"

export default function About() {
  return (
    <>
        <Helmet>
            <title>Can of Books About</title>
            <meta name='description' content='This is the about page for Can of Books'/>
            <link rel='canonical' href='/about'/>

        </Helmet>
        <main>
            <h2>About Page</h2>
            <p className='discription'>Here is the information about the creators of this website</p>
            <h3 className='developer'>Nick Lewis</h3>
            <h3 className='developer'>Jessica Bane</h3>
            <p className='moreInfo'>If you would like to look at the code please feel free at the GitHub link below</p>
            <a className='github' href='https://github.com/langfordlewis1984/can-of-books'>GitHub</a>
            
        </main>
    </>
  )
}