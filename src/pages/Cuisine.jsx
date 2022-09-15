import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "../components/Grid";

const Cuisine = function () {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getCuisine = async (name) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&cuisine=${name}`
      );
      const { results } = await api.json();
      setCuisine(results);
    };
    getCuisine(params.type);
  }, [params.type]);

  return <Grid data={cuisine} />;
};

export default Cuisine;
