import React from "react";
import AddToPantry from "./AddToPantry";
import PantryList from "./PantryList";

export default function Pantry() {
  return (
    <div>
      <PantryList></PantryList>
      <AddToPantry></AddToPantry>
    </div>
  );
}
