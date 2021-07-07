import React from 'react';
import {Link }from '@reach/router';
import { NavbarData } from './NavbarData'; 

export default function Navbar() {
  return (
    <nav>
      <ul>
        {NavbarData.map((item)=>{
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
      </ul>
    </nav>
  )
}
