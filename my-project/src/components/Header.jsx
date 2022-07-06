import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components'
import Shop from '../components/Shop'
import Sidebar from './Sidebar'

const Menu = styled.div`
  width: 100%;
  background: #15171c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const MenuIcon = styled.div`
  margin-right: 40px;
`




const Header = () => {
  return (
    <Router>
      <Menu>
      <div>
        <Sidebar />
      </div>
      <h1>Le musée de l'Art</h1>
      <MenuIcon>
        <Shop />
      </MenuIcon>
      </Menu>
    </Router>
  )
}

export default Header