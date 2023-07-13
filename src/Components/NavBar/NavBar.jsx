import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  
  return (
    <div>
      <header>
        <img src = 'https://png.pngtree.com/png-clipart/20190617/original/pngtree-vector-around-the-world-icon-png-image_3876642.jpg' className='logo'/>
        <nav>
          
          <ul>
            <li> Notebook </li>  
            <li> Tablet </li>
            <li> SmartPhone </li>
          </ul>  
        </nav>

        <CartWidget/>
      </header>

    </div>
  )
}

export default NavBar