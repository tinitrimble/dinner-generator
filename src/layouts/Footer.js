import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const Footer = () => (
  <Footer.Container>
    <Link to="/" className="page-name">
      <div className="tryagain">
        I don't want this. Try again.
      </div>
    </Link>
  </Footer.Container>
)

Footer.Container = styled.footer`
  background-color: pink;
`;

export default Footer;
