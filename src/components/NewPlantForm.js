import React, {useState} from "react";

function NewPlantForm({addPlantFunc}) {

  let [name, updateName] = useState("")
  let [image, updateImage] = useState("")
  let [number, updateNumber] = useState(0)

  function handleSubmit(event){
    event.preventDefault()
    console.log(event.target)

    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        number: number
      }),
    })
    .then(r => r.json())
    .then(plantInfo => addPlantFunc(plantInfo))

  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value = {name} onChange = {(e) => updateName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value = {image} onChange = {(e) => updateImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value = {number} onChange = {(e) => updateNumber(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
