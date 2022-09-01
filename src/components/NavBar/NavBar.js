import React from 'react'
import bootstrap from 'bootstrap'
import "./NavBar.css"

const NavBar = () => {
    return (
        <ul className="nav justify-content-center mt-3">
            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#project">Portfolio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="mailto: cchimie303@gmail.com">Contact</a>
            </li>
        </ul>
    )
}

export default NavBar