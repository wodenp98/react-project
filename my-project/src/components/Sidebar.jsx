import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navigation } from '../api/pictures'

const Nav = styled.div`
    background: #15171c;
    height:80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    color: white;
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    color: white;
    background: #15171c;
    width: 250px;
    height: 370px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`

const SidebarWrap = styled.div`
    width: 100%; 
`

const NavList = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
`


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
        <Nav>
            <NavIcon to='#'>
                <MenuIcon onClick={showSidebar}/>
            </NavIcon>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                <NavIcon to='#'>
                    <CloseIcon onClick={showSidebar} />
                </NavIcon>
                {navigation.map((item, index) => {
                    return (
                        <NavList key={index}>
                                <div>{item.icon}</div>
                                <div>{item.name}</div>
                        </NavList>
                    )
                })}
            </SidebarWrap>
        </SidebarNav>
        
        
    </>
  )
}

export default Sidebar