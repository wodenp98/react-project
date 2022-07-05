import React from 'react'


import Shop from '../components/Shop'
import Sidebar from './Sidebar'





const Header = () => {
  return (
    <header>
      <div>
      <div>
        <Sidebar />
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