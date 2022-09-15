import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Grid = function (props) {
  return (
    <GridWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {props.data.map((cur) => (
        <Card key={cur.id}>
          <Link to={`/recipe/${cur.id}`}>
            <img src={cur.image} alt={cur.title} />
            <h4>{cur.title}</h4>
          </Link>
        </Card>
      ))}
    </GridWrapper>
  );
};

const GridWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.6;
    padding: 0.5rem;
  }
`;

export default Grid;
