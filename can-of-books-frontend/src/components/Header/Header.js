import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <h1>Can of Books</h1>
        <nav>
            <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}
