import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const displayPlants = plants.map((plant) =>  { return < PlantCard {...plant} key = {plant.id} />})

  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
