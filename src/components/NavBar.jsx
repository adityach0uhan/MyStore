import React, { useState } from 'react'
import './styles/NavBar.css'


const NavBar = () => {

  const [isActive, isNotActive] = useState(false);

  function ShowMenu() {
    isNotActive(!isActive)
  }
  return(
    <>
    <nav>
      <span>Title</span>
          <button onClick={ShowMenu}>ClickMEnu</button>
        <ul className={isActive ? 'navBarShow' :'navBarHide' }>
          <li>All</li>
          <li>Mobiles</li>
          <li>Laptops</li>
          <li>TV</li>
        </ul>
    </nav>

    </>
  )
}

export default NavBar