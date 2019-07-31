import React from 'react'
import Link from 'gatsby-link';
import './Header.css';

const Header = () => (
  <header className="global" ui-view="header" autoscroll="true">
    <Link to="/" className="page-name">Where Should We Eat?</Link>
  </header>
)

export default Header;
