import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Header = () => (
  <Header.Link to="/" className="page-name">
    Where Should We Eat?
    <Header.Description>
      (Click the restaurant info to open Yelp!)
    </Header.Description>
  </Header.Link>
)

Header.Link = styled(Link)`
  padding: 18px;
  text-decoration: none;
  font-size: 36px;
  color: #63a9b0;
  font-family: serif;
`

Header.Description = styled.p`
  color: black;
  font-size: 12px;
`

export default Header
