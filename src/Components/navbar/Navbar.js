import React, { useState } from 'react';
import {Link }from '@reach/router';
import { NavbarData } from './NavbarData'; 
import {BiMenuAltLeft} from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

import './Navbar.css'

export default function Navbar() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <div className='navbar'>
          <span className='menu-open'>
            <BiMenuAltLeft onClick={showSidebar} />
          </span>
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
            <span className='menu-close'>
              <AiIcons.AiOutlineClose />
            </span>
        </li>
        {NavbarData.map((item)=>{
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>
                  {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
      </ul>
    </nav>
    </>
  )
}
