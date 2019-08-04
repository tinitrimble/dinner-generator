import React from 'react'
import footer from './Footer.css';
import { Link } from "gatsby";

const Footer = () => (
  <footer className="footer">
    <Link to="/" className="page-name">
      <div className="tryagain">
        I don't want this. Try again.
      </div>
    </Link>
  </footer>
)

export default Footer;
