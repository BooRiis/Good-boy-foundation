import React from 'react'

// logo
import logo from '../assets/imgs-icons/logo.png'

export function Footer() {
    return (
        <footer>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <h2>Nadácia Good Boy</h2>
                <ul>
                    <li>O projekte</li>
                    <li>Ako na to</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
            <div className="about">
                <h2>Nadácia Good boy</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque velit dicta pariatur labore alias commodi expedita aperiam.</p>
            </div>
            <div className="important-inf">
                <h2>Dôležité informácie</h2>
                <p>Integer et orci faucibus, iaculis arcu a, porttitor massa. Etiam sit amet augue aliquam, laoreet arcu eget, gravida augue. Nullam sed.</p>
            </div>
        </footer>
    )
}
