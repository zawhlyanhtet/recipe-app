import React from "react";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = function () {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to="/">deliciousss</Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
};

const Nav = styled.nav`
  padding: 1.9rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    font-size: 1.5rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

export default App;

// 3b6cb324db4f4e30b2e375ba36d46f74
