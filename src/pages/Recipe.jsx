import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = function () {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");
  const params = useParams();
  useEffect(() => {
    const fetchDetails = async function (id) {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };

    fetchDetails(params.name);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <div>
        <Button
          className={activeTab === "instruction" ? "active" : ""}
          onClick={() => setActiveTab("instruction")}
        >
          Instruction
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instruction" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((cur) => (
              <li key={cur.id}>{cur.original}</li>
            ))}
          </ul>
        )}
      </div>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-gap: 4rem;

  img {
    width: 100%;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 0.95rem;
    line-height: 2;
    margin-bottom: 1.2em;
  }

  li {
    font-size: 1rem;
    line-height: 2.2;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: 2px solid #333;
  background: #fff;
  color: #313131;
  font-weight: 500;
  margin-right: 1.5rem;
  margin-bottom: 1.6rem;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
`;

export default Recipe;
