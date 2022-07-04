import React from 'react'

import Nav from '../components/Nav'
import Shop from '../components/Shop'





const Header = () => {
  return (
    <header>
      <div>
      <div>
        <Nav />
      </div>
      <h1>Le musée de l'Art</h1>
      <div>
        <Shop />
      </div>
      </div>
    </header>
  )
}

export default Header