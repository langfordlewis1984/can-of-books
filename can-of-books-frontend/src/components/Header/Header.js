import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import LoginButton from '../../Login'
import LogoutButton from '../../Logout'
import Profile from '../../Profile'

export default function Header() {

    return (
    <div>
        <div className="logBut">
            <LoginButton />
            <LogoutButton />
        </div>
        <h1>Can of Books</h1>
        
        <nav>
            <ul>
            <li className='home'>
                <Link to={"/"}>Home</Link>
            </li>
            <Profile />
            <li className='about'>
                <Link to={"/about"}>About</Link>
            </li>
            </ul>
        </nav>

    </div>
  )
}
