import React, { useState } from "react";

const Nutrition = props => {
  const [title] = useState(props.title);
  const [amount] = useState(props.amount);
  const [unit] = useState(props.unit);
  return (
    <div>
      {title}: {amount} {unit}
    </div>
  );
};
export default Nutrition;
