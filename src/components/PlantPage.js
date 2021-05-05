import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const API = `http://localhost:6001/plants`

  let [plants, updatePlantList] = useState([])
  let [filter, updateFilter] = useState("")

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then( (plants) => {
        const tempPlants = plants.map( (plant ) => {
          return {...plant}
        })
        updatePlantList(tempPlants)
      })
      console.log(plants)
  }, []);

  function addPlantFunc(newPlant) {
    const tempArray = [...plants, newPlant]
    updatePlantList(tempArray)
  }
  
  function changeFilter(newFilter){
    updateFilter(newFilter)
  }


  const filterPlants = plants.filter( (plant) => { return plant.name.toLowerCase().includes(filter.toLowerCase()) } )


  return (
    <main>
      <NewPlantForm addPlantFunc = {addPlantFunc} />
      <Search changeFilter = {changeFilter} />
      <PlantList plants = {filterPlants} />
    </main>
  );
}

export default PlantPage;
