import React, { useState } from "react";

const Ingredient = props => {
  const [original] = useState(props.ingredient);
  return <div>{original}</div>;
};
export default Ingredient;
