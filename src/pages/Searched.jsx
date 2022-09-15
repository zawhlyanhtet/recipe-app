import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid";

const Searched = function () {
  const params = useParams();
  const [searchRecipes, setSearchRecipes] = useState([]);

  useEffect(() => {
    const getSearched = async (name) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&query=${name}`
      );
      const { results } = await api.json();
      setSearchRecipes(results);
    };
    getSearched(params.search);
  }, [params.search]);

  return <Grid data={searchRecipes} />;
};

export default Searched;
