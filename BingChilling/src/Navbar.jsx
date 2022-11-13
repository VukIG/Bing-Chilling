import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Jeni%27s_Splendid_Ice_Creams_logo.png" alt="" />
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <div className="special">
                <li><a href="">Customize your ice-cream</a></li>
            </div>

        </ul>
    </nav>
  )
}

export default Navbar