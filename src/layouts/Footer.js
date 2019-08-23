import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'

const Footer = () => (
    <Footer.Link to="/" className="page-name">
        I don't want this. Try again.
    </Footer.Link>
)

Footer.Link = styled(Link)`
  background-color: #63a9b0;
  padding: 20px;
  text-decoration: none;
  font-size: 20px;
  color: #edf9fa;
`;

export default Footer;
