import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = function () {
  return (
    <List>
      <SLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to="/cuisine/korean">
        <GiChopsticks />
        <h4>Korean</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  a {
    text-decoration: none;
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 50%;
  transition: background 0.2s ease;
  :not(:last-child) {
    margin-right: 2rem;
  }
  transform: scale(0.8);

  svg {
    color: #fff;
    font-size: 1rem;
  }

  h4 {
    font-size: 0.8rem;
    color: #fff;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
