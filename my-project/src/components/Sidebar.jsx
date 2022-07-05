import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navigation } from '../api/pictures'

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
        <div>
            <div to='#'>
                <MenuIcon onClick={showSidebar}/>
            </div>
        </div>
        
        <div>
         {/* sidebar={sidebar} */}
            <div>
                <div to='#'>
                    <CloseIcon onClick={showSidebar} />
                </div>
                {navigation.map((item, index) => {
                    return (
                        <li key={index}>
                                <div>{item.icon}</div>
                                <div>{item.name}</div>
                        </li>
                    )
                })}
            </div>
        </div>
        
        
    </>
  )
}

export default Sidebar