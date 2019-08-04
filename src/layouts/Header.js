import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

const Header = () => (
  <Header.Container>
    <Link to="/" className="page-name">Where Should We Eat?</Link>
  </Header.Container>
)

Header.Container = styled.header`
  background-color: red;
`;

export default Header;
