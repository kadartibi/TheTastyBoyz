import React, { useState, createContext } from "react";

export const PantryContext = createContext();

export function PantryProvider(props) {
  const [pantryItems, setPantryItems] = useState([
    "potato",
    "tomato"
  ]);
  return (
    <PantryContext.Provider value={[pantryItems, setPantryItems]}>
      {props.children}
    </PantryContext.Provider>
  );
}
