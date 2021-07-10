import React from 'react'

//icons
import fb from '../assets/imgs-icons/fb.svg'
import ig from '../assets/imgs-icons/ig.svg'

export const NavBar = () => {
    return (
        <header>
            <h1>Nadácia Good boy</h1>
            <div className="social-icons">
                <img src={fb} alt="" />
                <img src={ig} alt="" />
            </div>
        </header>
    )
}
