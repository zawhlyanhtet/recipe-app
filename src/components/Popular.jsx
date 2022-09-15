import React, { useEffect, useState } from "react";
import RecipeSlider from "./RecipeSlider";

const Popular = function () {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const getPopular = async () => {
      const checkdata = localStorage.getItem("popular");
      if (checkdata) {
        setPopular(JSON.parse(checkdata));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=9`
        );
        const data = await api.json();
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
      }
    };
    getPopular();
  }, []);

  return <RecipeSlider title="Popular Picks" data={popular} />;
};

export default Popular;
