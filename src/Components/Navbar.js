import React from 'react';
import {Link }from '@reach/router';

export default function Navbar({home, homeLink,ipoLink, ipo, stockLink, stock, economicLink, economic}) {
  return (
    <nav>
      <ul>
        <Link to={homeLink} >{home} </Link>
        <Link to={ipoLink} >{ipo} </Link>
        <Link to={stockLink} >{stock} </Link>
        <Link to={economicLink} >{economic} </Link>
      </ul>
    </nav>
  )
}
