import React, { useContext } from "react";
import CategoriesContext from "./context/CategoriesContext";

export default function Categories() {
  const categoryDescriptions = {
    glutenFree:
      "Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).",
    ketogenic:
      "The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.",
    vegetarian:
      "No ingredients may contain meat or meat by-products, such as bones or gelatin.",
    lactoVegetarian:
      "All ingredients must be vegetarian and none of the ingredients can be or contain egg.",
    ovoVegetarian:
      "All ingredients must be vegetarian and none of the ingredients can be or contain dairy.",
    vegan:
      "No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.",
    pescetarian:
      "Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.",
    paleo:
      "Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.",
    primal:
      "Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.",
    whole30:
      "Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites."
  };

  return (
    <div>
      <h1>This is the categories</h1>
    </div>
  );
}
