import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    },[])

    return (
        <nav className={`navbar ${show && "navbar_black"}`}>
            <div className="logo">
                <img src="./img/logo.png" alt="netflix logo" width="150"/>
            </div>
            <div className="userLogo">
                <img src="./img/usericon.png" alt="user icon" width="40"/>
            </div>
        </nav>
    );
}

export default Navbar