import React, { useState, useEffect } from "react";
import RecipeSlider from "./RecipeSlider";

const Veggie = function () {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    const getVeggie = async () => {
      const checkdata = localStorage.getItem("veggie");
      if (checkdata) {
        setVeggie(JSON.parse(checkdata));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&number=9&tags=vegetarian`
        );
        const data = await api.json();
        localStorage.setItem("veggie", JSON.stringify(data.recipes));
        setVeggie(data.recipes);
      }
    };
    getVeggie();
  }, []);
  return <RecipeSlider title="Our Vegetarian Picks" page={3} data={veggie} />;
};

export default Veggie;
