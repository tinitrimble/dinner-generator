import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Header = () => (
  <Header.Link to="/" className="page-name">
    Where Should We Eat?
  </Header.Link>
)

Header.Link = styled(Link)`
  padding: 20px;
  text-decoration: none;
  font-size: 22px;
  color: #698587;
  font-family: Verdana;
`

export default Header
