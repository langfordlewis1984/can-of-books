import React from 'react'
import { Helmet } from 'react-helmet-async'

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
            <p>Here is the information about the creators of this website</p>
            <h3>Nick Lewis</h3>
            <h3>Jessica Bane</h3>
            <p>
                Link to GitHub: https://github.com/langfordlewis1984/can-of-book
            </p>
        </main>
    </>
  )
}