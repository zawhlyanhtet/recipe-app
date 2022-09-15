import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function RecipeSlider(props) {
  return (
    <Wrapper>
      <h3>{props.title}</h3>
      <Splide
        options={{
          perPage: `${props.page ? props.page : 4}`,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {props.data.map((cur) => (
          <SplideSlide key={cur.id}>
            <Card>
              <Link to={`/recipe/${cur.id}`}>
                <p>{cur.title}</p>
                <img src={cur.image} alt={cur.title} />
                <Gradident></Gradident>
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: rgba(56, 56, 56);
  }
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    bottom: 0;
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.6;
  }
`;

const Gradident = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
`;

export default RecipeSlider;
